import { STOCK_IMAGES } from './images';

export interface RecycledProduct {
  id: string;
  name: string;
  materialNote: string;
  photoDescription: string;
  photoSrc: string | null;
}

export const COMPOSITE_STORY = {
  title: 'From Composite Waste to Reusable Products',
  summary:
    'Most waste companies stop at collection. We go further: our team is skilled at turning composite and mixed waste into useful, reusable products, closing the loop from your doorstep to the end user.',
  steps: [
    {
      step: '01',
      label: 'Mixed / Composite Waste',
      description: 'Multi-material and mixed non-biodegradable streams collected at source.',
      // STOCK IMAGE — swap in src/data/images.ts
      photoDescription: STOCK_IMAGES.compositeBeforeMixed.alt,
      photoSrc: STOCK_IMAGES.compositeBeforeMixed.src,
    },
    {
      step: '02',
      label: 'Sorting, Processing & Conversion',
      description: 'Precision separation, cleaning, and conversion at our processing facility.',
      // STOCK IMAGE — swap in src/data/images.ts
      photoDescription: STOCK_IMAGES.dryWasteSorting.alt,
      photoSrc: STOCK_IMAGES.dryWasteSorting.src,
    },
    {
      step: '03',
      label: 'Reusable Products',
      description: 'Durable everyday utility items ready for end-user reuse.',
      // STOCK IMAGE — swap in src/data/images.ts
      photoDescription: STOCK_IMAGES.compositeAfterProducts.alt,
      photoSrc: STOCK_IMAGES.compositeAfterProducts.src,
    },
  ],
  benefits: [
    {
      title: 'Less Landfill',
      description: 'Keeps stubborn mixed waste streams out of open dumps and landfills.',
    },
    {
      title: 'Resource Recovery',
      description: 'Extracts practical material value from multi-layer and composite waste.',
    },
    {
      title: 'Lower Disposal Cost',
      description: 'Reduces bulk haulage and tipping overhead for large campuses and societies.',
    },
    {
      title: 'Circular Economy Impact',
      description: 'Closes the loop by returning recovered materials as everyday utility goods.',
    },
  ],
  cta: 'Have mixed waste? Talk to our experts.',
};

export const RECYCLED_PRODUCTS: RecycledProduct[] = [
  {
    id: 'containers',
    name: 'Recycled Utility Containers',
    materialNote: 'Converted from: Recovered composite plastics',
    photoDescription: STOCK_IMAGES.compositeAfterProducts.alt,
    photoSrc: STOCK_IMAGES.compositeAfterProducts.src,
  },
  {
    id: 'baskets',
    name: 'Recycled Storage Baskets',
    materialNote: 'Converted from: Sorted post-consumer polymers',
    photoDescription: STOCK_IMAGES.compositeAfterProducts.alt,
    photoSrc: STOCK_IMAGES.compositeAfterProducts.src,
  },
  {
    id: 'hangers',
    name: 'Recycled Household Hangers',
    materialNote: 'Converted from: Reprocessed multi-layer dry waste',
    photoDescription: STOCK_IMAGES.compositeAfterProducts.alt,
    photoSrc: STOCK_IMAGES.compositeAfterProducts.src,
  },
  {
    id: 'compost-bins',
    name: 'Heavy-Duty Segregation Bins',
    materialNote: 'Converted from: Durable recovered composite resins',
    photoDescription: STOCK_IMAGES.compositeAfterProducts.alt,
    photoSrc: STOCK_IMAGES.compositeAfterProducts.src,
  },
];
