import { COMPANY_IMAGES, STOCK_IMAGES } from './images';

export type GalleryCategory =
  | 'All'
  | 'Collection Drives'
  | 'Facilities & Fleet'
  | 'Training Programs'
  | 'E-Waste'
  | 'Upcycled Products'
  | 'Team';

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Collection Drives',
  'Facilities & Fleet',
  'Training Programs',
  'E-Waste',
  'Upcycled Products',
  'Team',
];

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  location: string;
  photoDescription: string;
  photoSrc: string | null;
  aspect: 'tall' | 'wide' | 'square';
  fit?: 'cover' | 'contain';
  imgClassName?: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-mrf',
    title: 'Material Recovery Facility (M.R.F.) & Fleet',
    category: 'Facilities & Fleet',
    location: 'Koramangala 8th Block, Bengaluru',
    photoDescription: COMPANY_IMAGES.mrfFacilityFleet.alt,
    photoSrc: COMPANY_IMAGES.mrfFacilityFleet.src,
    aspect: 'wide',
  },
  {
    id: 'gal-composter',
    title: 'The Soil Maker — Automatic Organic Composter',
    category: 'Facilities & Fleet',
    location: 'Processing Facility',
    photoDescription: COMPANY_IMAGES.composterMachine.alt,
    photoSrc: COMPANY_IMAGES.composterMachine.src,
    aspect: 'wide',
  },
  {
    id: 'gal-light-fleet',
    title: 'Doorstep Collection & Utility Vehicle Fleet',
    category: 'Collection Drives',
    location: 'Bengaluru Operations Yard',
    photoDescription: COMPANY_IMAGES.lightPickupFleet.alt,
    photoSrc: COMPANY_IMAGES.lightPickupFleet.src,
    aspect: 'wide',
  },
  {
    id: 'gal-heavy-fleet',
    title: 'Heavy Commercial & Municipal Truck Fleet',
    category: 'Facilities & Fleet',
    location: 'Bengaluru Yard',
    photoDescription: COMPANY_IMAGES.heavyFleetTrucks.alt,
    photoSrc: COMPANY_IMAGES.heavyFleetTrucks.src,
    aspect: 'wide',
  },
  {
    id: 'gal-container',
    title: 'Bulk Roll-Off Waste Container Operations',
    category: 'Collection Drives',
    location: 'Bengaluru',
    photoDescription: COMPANY_IMAGES.bulkContainerTruck.alt,
    photoSrc: COMPANY_IMAGES.bulkContainerTruck.src,
    aspect: 'wide',
  },
  {
    id: 'gal-team',
    title: 'Operations Team, Leadership & Machinery',
    category: 'Team',
    location: 'Bengaluru Facility',
    photoDescription: COMPANY_IMAGES.teamAndMachinery.alt,
    photoSrc: COMPANY_IMAGES.teamAndMachinery.src,
    aspect: 'wide',
    imgClassName: COMPANY_IMAGES.teamAndMachinery.imgClassName,
  },
  {
    id: 'gal-segregation-guide',
    title: 'Four-Stream Waste Segregation Visual Guide',
    category: 'Training Programs',
    location: 'Bengaluru Awareness Drives',
    photoDescription: COMPANY_IMAGES.segregationGuidePoster.alt,
    photoSrc: COMPANY_IMAGES.segregationGuidePoster.src,
    aspect: 'square',
    fit: COMPANY_IMAGES.segregationGuidePoster.fit,
  },
  {
    id: 'gal-3',
    title: 'School Waste Awareness Workshop',
    category: 'Training Programs',
    location: 'Bengaluru Campus',
    // STOCK IMAGE — swap in src/data/images.ts
    photoDescription: STOCK_IMAGES.trainingAwarenessDrive.alt,
    photoSrc: STOCK_IMAGES.trainingAwarenessDrive.src,
    aspect: 'square',
  },
  {
    id: 'gal-4',
    title: 'Corporate E-Waste Collection Bay',
    category: 'E-Waste',
    location: 'Bengaluru Tech Park',
    // STOCK IMAGE — swap in src/data/images.ts
    photoDescription: STOCK_IMAGES.ewasteElectronics.alt,
    photoSrc: STOCK_IMAGES.ewasteElectronics.src,
    aspect: 'wide',
  },
  {
    id: 'gal-5',
    title: 'Recycled Containers, Baskets & Hangers Output',
    category: 'Upcycled Products',
    location: 'Processing Unit',
    // STOCK IMAGE — swap in src/data/images.ts
    photoDescription: STOCK_IMAGES.compositeAfterProducts.alt,
    photoSrc: STOCK_IMAGES.compositeAfterProducts.src,
    aspect: 'tall',
  },
  {
    id: 'gal-7',
    title: 'Dry Waste Conveyor Sorting Line',
    category: 'Facilities & Fleet',
    location: 'Processing Facility',
    // STOCK IMAGE — swap in src/data/images.ts
    photoDescription: STOCK_IMAGES.dryWasteSorting.alt,
    photoSrc: STOCK_IMAGES.dryWasteSorting.src,
    aspect: 'wide',
  },
  {
    id: 'gal-9',
    title: 'Composite Waste Sorting Before Conversion',
    category: 'Upcycled Products',
    location: 'Processing Unit',
    // STOCK IMAGE — swap in src/data/images.ts
    photoDescription: STOCK_IMAGES.compositeBeforeMixed.alt,
    photoSrc: STOCK_IMAGES.compositeBeforeMixed.src,
    aspect: 'wide',
  },
];

export interface BeforeAfterPair {
  id: string;
  title: string;
  subtitle: string;
  beforeLabel: string;
  beforeDescription: string;
  beforeSrc: string | null;
  afterLabel: string;
  afterDescription: string;
  afterSrc: string | null;
}

export const BEFORE_AFTER_TRANSFORMATIONS: BeforeAfterPair[] = [
  {
    id: 'composite-transformation',
    title: 'Composite Waste to Reusable Utility Products',
    subtitle: 'Drag the slider to compare incoming mixed composite waste and finished reusable output.',
    beforeLabel: 'Before: Mixed / Composite Waste',
    // STOCK IMAGE — swap in src/data/images.ts
    beforeDescription: STOCK_IMAGES.compositeBeforeMixed.alt,
    beforeSrc: STOCK_IMAGES.compositeBeforeMixed.src,
    afterLabel: 'After: Reusable Products',
    // STOCK IMAGE — swap in src/data/images.ts
    afterDescription: STOCK_IMAGES.compositeAfterProducts.alt,
    afterSrc: STOCK_IMAGES.compositeAfterProducts.src,
  },
  {
    id: 'organic-transformation',
    title: 'Dry Recyclables Sorting & Material Recovery',
    subtitle: 'Mixed dry streams sorted on our conveyor line into clean recoverable grades.',
    beforeLabel: 'Before: Mixed Dry Streams',
    // STOCK IMAGE — swap in src/data/images.ts
    beforeDescription: STOCK_IMAGES.compositeBeforeMixed.alt,
    beforeSrc: STOCK_IMAGES.compositeBeforeMixed.src,
    afterLabel: 'After: Sorted Recyclables',
    // STOCK IMAGE — swap in src/data/images.ts
    afterDescription: STOCK_IMAGES.dryWasteSorting.alt,
    afterSrc: STOCK_IMAGES.dryWasteSorting.src,
  },
];
