// Company-owned photography and stock images centralized in one place.
// Replace any path below to swap images site-wide while keeping alt descriptions accurate.

export interface ImageAssetEntry {
  src: string;
  alt: string;
  fit?: 'cover' | 'contain';
  imgClassName?: string;
}

export type StockImageEntry = ImageAssetEntry;

// Company-provided authentic facility, fleet, machinery, team, and signage photos
export const COMPANY_IMAGES = {
  mrfFacilityFleet: {
    src: '/assets/aistudio/image_9f25151a.png',
    alt: 'Sri Balaji Enterprises Material Recovery Facility (MRF) in Koramangala with collection trucks parked outside the green facility building',
  },
  heavyFleetTrucks: {
    src: '/assets/aistudio/image_949d9bfb.png',
    alt: 'Heavy commercial and municipal waste collection trucks lined up in the Sri Balaji Enterprises operations yard',
  },
  lightPickupFleet: {
    src: '/assets/aistudio/image_9df9c510.png',
    alt: 'Fleet of doorstep waste collection mini-tippers, enclosed pickup vans, and utility vehicles at the Sri Balaji Enterprises depot',
  },
  bulkContainerTruck: {
    src: '/assets/aistudio/image_4e544606.png',
    alt: 'Green hook-lift roll-off waste container being loaded onto a heavy waste transport vehicle',
  },
  composterMachine: {
    src: '/assets/aistudio/image_48a54678.png',
    alt: 'The Soil Maker automatic organic waste composter and feed conveyors operating inside the Sri Balaji Enterprises processing shed',
  },
  teamAndMachinery: {
    src: '/assets/aistudio/image_857c9c87.png',
    alt: 'Sri Balaji Enterprises operations team, supervisors, and heavy machinery gathered outside the green waste processing shed',
    imgClassName: 'object-[50%_80%] scale-[1.22]',
  },
  segregationGuidePoster: {
    src: '/assets/aistudio/image_b2ec7bf5.png',
    alt: 'Waste segregation guide showing green Wet Waste, blue Dry Waste, red Sanitary Waste, and black Hazardous Waste bins with accepted items',
    fit: 'contain' as const,
  },
} as const;

export const STOCK_IMAGES = {
  // STOCK IMAGE — swap with your uploaded hero/crew photo
  heroCrew: {
    src: '/src/assets/images/hero_collection_crew_1794922316240.jpg',
    alt: 'Waste collection workers in hi-vis vests standing beside a waste collection truck on a clean Bengaluru street',
  },
  // STOCK IMAGE — swap with your uploaded dry waste / conveyor sorting photo
  dryWasteSorting: {
    src: '/src/assets/images/dry_waste_sorting_1794922317715.jpg',
    alt: 'Sorted plastic bottles, flattened cardboard, and paper moving along a dry waste recycling sorting conveyor line',
  },
  // STOCK IMAGE — swap with your uploaded e-waste photo
  ewasteElectronics: {
    src: '/src/assets/images/ewaste_electronics_1794922317684.jpg',
    alt: 'Discarded laptops, smartphones, green circuit boards, and copper cables sorted in crates for authorised e-waste recycling',
  },
  // STOCK IMAGE — swap with your uploaded composting photo
  organicComposting: {
    src: '/src/assets/images/organic_composting_1794922317937.jpg',
    alt: 'Segregated kitchen and vegetable organic waste beside aerobic compost bins and dark finished compost soil',
  },
  // STOCK IMAGE — swap with your uploaded composite waste "before" photo
  compositeBeforeMixed: {
    src: '/src/assets/images/composite_before_mixed_1794922319522.jpg',
    alt: 'Mixed multi-layer composite plastic packaging collected in a sorting bin prior to processing',
  },
  // STOCK IMAGE — swap with your uploaded recycled products "after" photo
  compositeAfterProducts: {
    src: '/src/assets/images/composite_after_products_1794922319402.jpg',
    alt: 'Recycled plastic storage baskets, utility containers, and durable household hangers made from recovered materials',
  },
  // STOCK IMAGE — swap with your uploaded training workshop / clean-up drive photo
  trainingAwarenessDrive: {
    src: '/src/assets/images/training_awareness_drive_1794922319672.jpg',
    alt: 'Community and school waste segregation awareness workshop with green wet-waste and blue dry-waste bins',
  },
  // STOCK IMAGE — swap with your uploaded apartment / commercial pickup photo
  residentialCommercialPickup: {
    src: '/src/assets/images/residential_commercial_pickup_1794922320377.jpg',
    alt: 'Apartment complex and office frontage with segregated waste bins and a clean collection pickup vehicle in Bengaluru',
  },
} as const;
