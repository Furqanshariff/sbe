// SAMPLE DATA — illustrative client report figures for the Our Process page.
// Edit any field below in one place to update the Monthly Waste Report preview card.

export interface ReportStreamMetric {
  id: 'wet' | 'dry' | 'composite' | 'ewaste';
  label: string;
  amountKg: number;
  formattedAmount: string;
  colorHex: string;
  swatchClass: string;
}

export interface SampleMonthlyReport {
  badgeLabel: string;
  eyebrow: string;
  title: string;
  clientCampus: string;
  reportingPeriod: string;
  totalDivertedKg: number;
  formattedTotalDiverted: string;
  diversionRatePercent: number;
  diversionRateNote: string;
  segregationCompliancePercent: number;
  segregationComplianceRating: string;
  streams: ReportStreamMetric[];
  downloadButtonLabel: string;
  downloadHref: string | null;
  footnote: string;
}

function formatKg(value: number): string {
  return `${value.toLocaleString('en-IN')} kg`;
}

const WET_KG = 4820;
const DRY_KG = 2310;
const COMPOSITE_KG = 640;
const EWASTE_KG = 185;
const TOTAL_KG = WET_KG + DRY_KG + COMPOSITE_KG + EWASTE_KG;

export const SAMPLE_MONTHLY_REPORT: SampleMonthlyReport = {
  badgeLabel: 'Sample',
  eyebrow: 'Sample Report Format',
  title: 'Monthly Waste Report',
  clientCampus: 'Green Valley Apartments, Koramangala',
  reportingPeriod: 'October 2026',
  totalDivertedKg: TOTAL_KG,
  formattedTotalDiverted: formatKg(TOTAL_KG),
  diversionRatePercent: 92,
  diversionRateNote: '92% diversion rate',
  segregationCompliancePercent: 94,
  segregationComplianceRating: 'Excellent',
  streams: [
    {
      id: 'wet',
      label: 'Wet Waste Composted',
      amountKg: WET_KG,
      formattedAmount: formatKg(WET_KG),
      colorHex: '#6AAA00', // Brand Green
      swatchClass: 'bg-brand-green',
    },
    {
      id: 'dry',
      label: 'Dry Waste Recycled',
      amountKg: DRY_KG,
      formattedAmount: formatKg(DRY_KG),
      colorHex: '#165A7D', // Ocean Blue
      swatchClass: 'bg-ocean',
    },
    {
      id: 'composite',
      label: 'Composite Converted',
      amountKg: COMPOSITE_KG,
      formattedAmount: formatKg(COMPOSITE_KG),
      colorHex: '#083652', // Deep Navy
      swatchClass: 'bg-navy',
    },
    {
      id: 'ewaste',
      label: 'E-Waste Routed',
      amountKg: EWASTE_KG,
      formattedAmount: formatKg(EWASTE_KG),
      colorHex: '#9AC3D4', // Light Ocean Tint
      swatchClass: 'bg-[#9AC3D4]',
    },
  ],
  downloadButtonLabel: 'Download Sample Report',
  downloadHref: null,
  footnote: 'Illustrative sample. Actual reports are customised for each client.',
};
