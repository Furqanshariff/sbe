export interface CertificationCard {
  id: string;
  title: string;
  authority: string;
  certificateNumber: string | null;
  documentUrl: string | null;
  note: string;
}

export const CERTIFICATIONS: CertificationCard[] = [
  {
    id: 'kspcb',
    title: 'KSPCB Authorisation',
    authority: 'Karnataka State Pollution Control Board',
    certificateNumber: null,
    documentUrl: null,
    note: 'Compliance documentation available on onboarding',
  },
  {
    id: 'ewaste-auth',
    title: 'E-Waste Handling & Routing Authorisation',
    authority: 'Authorised Recycler Network Compliance',
    certificateNumber: null,
    documentUrl: null,
    note: 'Verified handover exclusively to authorised recyclers',
  },
  {
    id: 'swm-rules',
    title: 'SWM Rules 2016 Compliance',
    authority: 'Solid Waste Management Operational Alignment',
    certificateNumber: null,
    documentUrl: null,
    note: 'Aligned with municipal & Karnataka SWM standards',
  },
  {
    id: 'business-reg',
    title: 'Business Registration & Trade Licence',
    authority: 'Government of Karnataka / Municipal Authority',
    certificateNumber: null,
    documentUrl: null,
    note: 'Registered environmental services enterprise',
  },
];
