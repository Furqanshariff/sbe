export interface ImpactMetric {
  id: string;
  label: string;
  value: number | '' | null | undefined;
  suffix?: string;
  unit?: string;
  description: string;
}

// SAMPLE DATA - replace with verified figures before launch.
// Leave `value: null` or `''` to hide a card automatically.
export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'years-experience',
    label: 'Years of Experience',
    value: 10,
    suffix: '+',
    unit: 'years',
    description: 'Serving Bengaluru homes, societies, schools, and workplaces.',
  },
  {
    id: 'communities-served',
    label: 'Communities & Campuses Served',
    value: 150,
    suffix: '+',
    description: 'Apartments, corporate offices, schools, and institutions across Bengaluru.',
  },
  {
    id: 'waste-diverted',
    label: 'Waste Diverted from Landfill',
    value: 1200,
    suffix: '+',
    unit: 'tonnes',
    description: 'Cumulative waste routed to recycling, composting, and reuse.',
  },
  {
    id: 'composite-converted',
    label: 'Composite Waste Converted',
    value: 350,
    suffix: '+',
    unit: 'tonnes',
    description: 'Mixed and multi-material waste transformed into reusable products.',
  },
  {
    id: 'ewaste-routed',
    label: 'E-Waste Safely Routed',
    value: 5000,
    suffix: '+',
    unit: 'kg',
    description: 'Discarded electronics collected and directed to authorised recyclers.',
  },
];
