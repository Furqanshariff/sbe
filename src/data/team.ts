import { COMPANY_IMAGES, STOCK_IMAGES } from './images';

export interface TeamMemberProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoSrc: string | null;
  photoDescription: string;
}

export interface OperationsPhotoSlot {
  id: string;
  title: string;
  photoDescription: string;
  photoSrc: string | null;
  imgClassName?: string;
}

export const LEADERSHIP_PLACEHOLDERS: TeamMemberProfile[] = [
  {
    id: 'leader-1',
    name: 'Ramesh Babu N.',
    role: 'Founder & Managing Director',
    bio: 'Over a decade leading Bengaluru waste collection routes, municipal partnerships, and Material Recovery Facility operations.',
    photoSrc: STOCK_IMAGES.heroCrew.src,
    photoDescription: STOCK_IMAGES.heroCrew.alt,
  },
  {
    id: 'leader-2',
    name: 'Venkatesh Gowda',
    role: 'Head of Fleet & Field Operations',
    bio: 'Oversees daily collection fleet scheduling, bulk container logistics, and Koramangala depot dispatch across city routes.',
    photoSrc: COMPANY_IMAGES.heavyFleetTrucks.src,
    photoDescription: COMPANY_IMAGES.heavyFleetTrucks.alt,
  },
  {
    id: 'leader-3',
    name: 'Anitha Deshmukh',
    role: 'Training & Sustainability Lead',
    bio: 'Drives source-segregation workshops, school eco-campaigns, and compliance audits for apartments, campuses, and offices.',
    photoSrc: STOCK_IMAGES.trainingAwarenessDrive.src,
    photoDescription: STOCK_IMAGES.trainingAwarenessDrive.alt,
  },
];

export const TEAM_GALLERY_SLOTS: OperationsPhotoSlot[] = [
  {
    id: 'team-crew',
    title: 'Operations Team & Heavy Machinery',
    photoDescription: COMPANY_IMAGES.teamAndMachinery.alt,
    photoSrc: COMPANY_IMAGES.teamAndMachinery.src,
    imgClassName: COMPANY_IMAGES.teamAndMachinery.imgClassName,
  },
  {
    id: 'fleet-trucks',
    title: 'Dedicated Collection Fleet',
    photoDescription: COMPANY_IMAGES.heavyFleetTrucks.alt,
    photoSrc: COMPANY_IMAGES.heavyFleetTrucks.src,
  },
  {
    id: 'processing-unit',
    title: 'Sorting & Organic Composting Facility',
    photoDescription: COMPANY_IMAGES.composterMachine.alt,
    photoSrc: COMPANY_IMAGES.composterMachine.src,
  },
];
