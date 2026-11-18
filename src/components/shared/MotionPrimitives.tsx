import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (prefersReduced || isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.38, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedCounter({
  value,
  suffix = '+',
  unit,
  durationMs = 2000,
  startWhen,
}: {
  value: number;
  suffix?: string;
  unit?: string;
  durationMs?: number;
  startWhen?: boolean;
}) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLSpanElement | null>(null);
  const [internalStarted, setInternalStarted] = useState(false);
  const hasStarted = startWhen !== undefined ? startWhen : internalStarted;
  const [display, setDisplay] = useState(() => (prefersReduced ? value : 0));

  useEffect(() => {
    if (startWhen !== undefined) return;
    if (prefersReduced) {
      setInternalStarted(true);
      return;
    }

    const node = ref.current;
    if (!node || internalStarted) return;

    if (typeof IntersectionObserver === 'undefined') {
      setInternalStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setInternalStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [internalStarted, prefersReduced, startWhen]);

  useEffect(() => {
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    if (!hasStarted) return;

    let raf = 0;
    const startTime = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      // Cubic ease-out curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, hasStarted, durationMs, prefersReduced]);

  return (
    <span ref={ref} className="inline-flex flex-wrap items-baseline gap-x-1.5 tabular-nums">
      <span className="inline-flex items-baseline">
        <span className="font-display text-3xl font-extrabold tracking-tight text-brand-green sm:text-4xl lg:text-[32px] xl:text-[38px]">
          {display.toLocaleString('en-IN')}
        </span>
        {suffix && (
          <span className="ml-0.5 font-display text-xl font-bold text-brand-green sm:text-2xl lg:text-xl xl:text-2xl">
            {suffix}
          </span>
        )}
      </span>
      {unit && (
        <span className="text-sm font-medium text-white/90 sm:text-base lg:text-sm">
          {unit}
        </span>
      )}
    </span>
  );
}
