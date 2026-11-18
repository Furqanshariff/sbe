import 'dotenv/config';
import path from 'node:path';
import express from 'express';
import { z } from 'zod';

const PORT = Number(process.env.PORT) || 3000;
const FORM_WEBHOOK_URL = process.env.FORM_WEBHOOK_URL || '';
const COMPANY_EMAIL = process.env.COMPANY_EMAIL || 'info@sribalajiwastemanagement.com';

const submissionSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name'),
  phone: z.string().trim().min(7, 'Please enter a valid phone number'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  organisation: z.string().trim().optional().or(z.literal('')),
  areaPincode: z.string().trim().min(3, 'Please enter your area or pincode'),
  customerType: z.string().trim().min(1, 'Please select a customer type'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  approxQuantity: z.string().trim().optional().or(z.literal('')),
  preferredDate: z.string().trim().optional().or(z.literal('')),
  message: z.string().trim().optional().or(z.literal('')),
});

async function startServer(): Promise<void> {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true });
  });

  app.post('/api/contact', async (req, res) => {
    const parsed = submissionSchema.safeParse(req.body);
    if (!parsed.success) {
      res.status(400).json({
        error: 'Validation failed',
        issues: parsed.error.flatten().fieldErrors,
      });
      return;
    }

    const payload = {
      ...parsed.data,
      recipientEmail: COMPANY_EMAIL,
      submittedAt: new Date().toISOString(),
      source: 'Sri Balaji Enterprises Website',
    };

    let forwarded = false;
    if (FORM_WEBHOOK_URL) {
      try {
        const forwardRes = await fetch(FORM_WEBHOOK_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });
        forwarded = forwardRes.ok;
      } catch (err) {
        console.error('Form webhook forward error:', err);
      }
    }

    res.status(200).json({
      ok: true,
      forwarded,
      recipientEmail: COMPANY_EMAIL,
    });
  });

  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sri Balaji Enterprises server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
