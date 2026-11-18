import { COMPANY_IMAGES, STOCK_IMAGES } from './images';

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDesc: string;
  whatItIs: string;
  whoItIsFor: string;
  benefits: string[];
  photoDescription: string;
  photoSrc: string | null;
  photoFit?: 'cover' | 'contain';
  iconName:
    | 'Cpu'
    | 'Recycle'
    | 'Sprout'
    | 'Truck'
    | 'ClipboardCheck'
    | 'GraduationCap';
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'e-waste',
    slug: 'e-waste-management',
    number: '01',
    title: 'E-Waste Management',
    shortDesc:
      'Safe collection of discarded electronics, circuit boards, laptops, phones, and cables with compliant routing to authorised recyclers.',
    whatItIs:
      'We collect end-of-life electronics—including phones, laptops, circuit boards, peripherals, and cables—handle them safely at pickup, and ensure compliant routing to authorised e-waste recyclers.',
    whoItIsFor:
      'IT parks, corporate offices, schools, colleges, and residential complexes undergoing hardware refreshes or clean-out drives.',
    benefits: [
      'Safe handling of phones, laptops, circuit boards, and cables',
      'Prevents toxic heavy metals from entering general landfills',
      'Compliant routing exclusively to authorised e-waste recyclers',
      'Scheduled bulk drives or on-demand institutional pickups',
    ],
    // STOCK IMAGE — swap in src/data/images.ts
    photoDescription: STOCK_IMAGES.ewasteElectronics.alt,
    photoSrc: STOCK_IMAGES.ewasteElectronics.src,
    iconName: 'Cpu',
  },
  {
    id: 'dry-waste',
    slug: 'dry-waste-recycling',
    number: '02',
    title: 'Dry Waste Recycling',
    shortDesc:
      'Structured sorting and recovery of paper, cardboard, plastics, metals, and glass to keep high-value recyclables in circulation.',
    whatItIs:
      'Doorstep and bulk collection of clean, segregated dry waste—paper, cardboard, plastics, metals, and glass—sorted into grades and directed to processing and recycling streams.',
    whoItIsFor:
      'Apartments, commercial buildings, retail spaces, warehouses, and educational institutions across Bengaluru.',
    benefits: [
      'Systematic sorting by material stream for higher recovery',
      'Dedicated collection schedules tailored to generation volume',
      'Reduces mixed dumping and lowers overall disposal burden',
      'Supports circular material recovery across local supply chains',
    ],
    // STOCK IMAGE — swap in src/data/images.ts
    photoDescription: STOCK_IMAGES.dryWasteSorting.alt,
    photoSrc: STOCK_IMAGES.dryWasteSorting.src,
    iconName: 'Recycle',
  },
  {
    id: 'organic-composting',
    slug: 'organic-food-waste-composting',
    number: '03',
    title: 'Organic & Food Waste Composting',
    shortDesc:
      'Scientific conversion of kitchen scraps, canteen food waste, and garden trimmings into nutrient-rich compost.',
    whatItIs:
      'Wet organic waste from kitchens, cafeterias, and landscaping is collected and processed using scientific composting methods, turning daily food scraps back into soil-enriching compost.',
    whoItIsFor:
      'Residential gated communities, tech parks with cafeterias, hotels, hostels, and institutional campuses.',
    benefits: [
      'Diverts high-moisture food waste away from landfills',
      'Odour-controlled collection and scientific composting workflows',
      'Produces usable compost for landscaping and green spaces',
      'Consistent daily or scheduled pickups across Bengaluru wards',
    ],
    photoDescription: COMPANY_IMAGES.composterMachine.alt,
    photoSrc: COMPANY_IMAGES.composterMachine.src,
    iconName: 'Sprout',
  },
  {
    id: 'residential-commercial',
    slug: 'residential-commercial-collection',
    number: '04',
    title: 'Residential & Commercial Waste Collection',
    shortDesc:
      'Dependable doorstep and bulk waste pickup with trained staff and scheduled fleet routes across Bengaluru.',
    whatItIs:
      'Reliable, punctual doorstep and bulk waste collection operated by trained field teams, maintaining strict source-segregation discipline from pickup point to processing unit.',
    whoItIsFor:
      'Apartments, RWAs, independent layouts, corporate offices, commercial complexes, and event venues.',
    benefits: [
      'Punctual, scheduled doorstep and bulk bin clearances',
      'Uniformed, trained collection crew with segregation checks',
      'City-wide Bengaluru route coverage',
      'Transparent communication and responsive pickup support',
    ],
    photoDescription: COMPANY_IMAGES.lightPickupFleet.alt,
    photoSrc: COMPANY_IMAGES.lightPickupFleet.src,
    iconName: 'Truck',
  },
  {
    id: 'consulting',
    slug: 'waste-management-consulting',
    number: '05',
    title: 'Waste Management Consulting',
    shortDesc:
      'Site audits, segregation workflows, and compliant waste plans tailored to regulatory rules and sustainability goals.',
    whatItIs:
      'End-to-end waste audits and operational planning to help organisations understand waste streams, optimise bin infrastructure, align with Solid Waste Management rules, and reduce landfill dependency.',
    whoItIsFor:
      'Facility managers, ESG and sustainability teams, apartment associations, builders, and institutional leadership.',
    benefits: [
      'Baseline waste stream assessment and volume mapping',
      'Practical bin placement, signage, and collection room design',
      'Guidance aligned with municipal and environmental norms',
      'Actionable roadmaps toward zero-waste campus operations',
    ],
    photoDescription: COMPANY_IMAGES.bulkContainerTruck.alt,
    photoSrc: COMPANY_IMAGES.bulkContainerTruck.src,
    iconName: 'ClipboardCheck',
  },
  {
    id: 'facility-training',
    slug: 'facility-management-training',
    number: '06',
    title: 'Facility Management & Training Programs',
    shortDesc:
      'Hands-on segregation workshops, housekeeping staff training, and awareness campaigns for lasting behavioural change.',
    whatItIs:
      'Practical training programs for housekeeping staff, students, residents, and office employees, paired with ongoing facility waste-room management and awareness campaigns.',
    whoItIsFor:
      'Schools, colleges, apartment societies, corporate campuses, and commercial facility teams.',
    benefits: [
      'Hands-on workshops tailored for residents, students, and staff',
      'Clear visual segregation training for housekeeping teams',
      'Dedicated waste-bay supervision and cleanliness standards',
      'Ongoing support to sustain high segregation quality',
    ],
    photoDescription: COMPANY_IMAGES.segregationGuidePoster.alt,
    photoSrc: COMPANY_IMAGES.segregationGuidePoster.src,
    photoFit: COMPANY_IMAGES.segregationGuidePoster.fit,
    iconName: 'GraduationCap',
  },
];

export const TRAINING_STEPS = [
  {
    step: '01',
    title: 'Consultation',
    description:
      'We meet with your committee, facility team, or campus leadership to understand daily waste patterns and awareness gaps.',
  },
  {
    step: '02',
    title: 'Site Inspection',
    description:
      'Our specialists inspect collection bays, bin stations, and housekeeping workflows to pinpoint practical bottlenecks.',
  },
  {
    step: '03',
    title: 'Program Design',
    description:
      'We build a customised segregation module, signage plan, and hands-on workshop schedule suited to your audience.',
  },
  {
    step: '04',
    title: 'Implementation',
    description:
      'Our trainers deliver engaging sessions for residents, employees, students, and housekeeping crews with live demos.',
  },
  {
    step: '05',
    title: 'Monitoring & Support',
    description:
      'We follow up with periodic quality checks and refresher guidance so clean segregation habits stay consistent.',
  },
];

export const WHO_WE_SERVE = [
  {
    title: 'Apartments & Societies',
    description:
      'Doorstep segregated collection, wet-waste composting support, and resident awareness drives for RWAs.',
  },
  {
    title: 'Corporate Offices',
    description:
      'Dependable dry waste recycling, cafeteria organic collection, e-waste drives, and compliance documentation.',
  },
  {
    title: 'Schools & Institutions',
    description:
      'Campus-wide collection combined with student workshops that build practical recycling and composting habits.',
  },
  {
    title: 'Industries',
    description:
      'Structured scrap, packaging, and composite waste recovery tailored to commercial and industrial operations.',
  },
  {
    title: 'Events',
    description:
      'Pre-event bin planning, on-ground segregation teams, and post-event clearance to keep venues clean.',
  },
];

export const SEGREGATION_GUIDE = [
  {
    id: 'wet',
    title: 'Wet / Organic Waste',
    binColor: 'Green Bin',
    examples: 'Cooked food leftovers, vegetable & fruit peels, tea bags, coffee grounds, garden leaves',
    action: 'Routed to scientific composting to produce nutrient-rich soil conditioner.',
    accentClass: 'border-brand-green bg-brand-green-soft text-brand-green-dark',
  },
  {
    id: 'dry',
    title: 'Dry Recyclable Waste',
    binColor: 'Blue Bin',
    examples: 'Clean paper, cardboard boxes, PET bottles, rigid plastics, metal cans, glass',
    action: 'Sorted by grade at our processing units and sent for recycling or conversion.',
    accentClass: 'border-ocean bg-ocean/10 text-ocean',
  },
  {
    id: 'sanitary',
    title: 'Sanitary & Reject Waste',
    binColor: 'Red / Wrapped',
    examples: 'Diapers, sanitary napkins, bandages, swept dust, contaminated tissues',
    action: 'Wrapped securely and handled separately to prevent contaminating recyclable streams.',
    accentClass: 'border-amber-600 bg-amber-50 text-amber-800',
  },
  {
    id: 'ewaste',
    title: 'E-Waste',
    binColor: 'Dedicated E-Waste Box',
    examples: 'Old phones, laptops, chargers, cables, circuit boards, keyboards, small appliances',
    action: 'Collected separately and routed exclusively to authorised e-waste recyclers.',
    accentClass: 'border-navy bg-navy/10 text-navy',
  },
  {
    id: 'hazardous',
    title: 'Domestic Hazardous Waste',
    binColor: 'Marked Hazardous Bin',
    examples: 'Batteries, CFL/tube lights, paint tins, expired medicines, chemical spray cans',
    action: 'Isolated from general waste for safe, compliant handling and disposal.',
    accentClass: 'border-rose-700 bg-rose-50 text-rose-800',
  },
];
