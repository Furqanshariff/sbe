export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: 'coverage',
    question: 'Which areas of Bengaluru does Sri Balaji Enterprises cover?',
    answer:
      'We operate city-wide collection and waste management services across Bengaluru, anchored from our Koramangala Material Recovery Facility. Share your locality and pincode via our Contact page or WhatsApp and we will confirm scheduled route timings for your site.',
  },
  {
    id: 'composite-waste',
    question: 'What happens to composite or mixed multi-material waste?',
    answer:
      'Unlike collectors who dump mixed waste in landfills, our team specialises in sorting, processing, and converting composite waste into durable reusable products—such as utility containers, baskets, and hangers—recovering material value and cutting landfill burden.',
  },
  {
    id: 'segregation',
    question: 'Do we need to segregate waste before pickup?',
    answer:
      'Yes, basic source segregation into Wet, Dry, Sanitary/Reject, E-Waste, and Hazardous streams keeps recyclables clean and compost uncontaminated. If your apartment, campus, or office is still building that habit, we also run hands-on workshops and bin setup training.',
  },
  {
    id: 'ewaste-compliance',
    question: 'How do you handle e-waste and IT hardware?',
    answer:
      'Discarded laptops, phones, circuit boards, cables, and peripherals are collected separately with safe handling and routed exclusively to authorised e-waste recyclers, preventing toxic heavy metals from entering general waste streams.',
  },
  {
    id: 'reporting',
    question: 'Do you provide monthly waste diversion reports for apartments and corporates?',
    answer:
      'Yes. Active residential societies, schools, and corporate campuses receive structured Monthly Waste Reports breaking down wet waste composted, dry waste recycled, composite converted, e-waste routed, diversion percentage, and segregation compliance.',
  },
  {
    id: 'one-time-drives',
    question: 'Can you organise one-time e-waste or clean-out drives?',
    answer:
      'Yes. Alongside scheduled daily or weekly pickups, we organise dedicated one-time e-waste collection drives, bulky dry recyclable clearances, and zero-waste event support across residential complexes, IT parks, and schools.',
  },
  {
    id: 'quote-timeline',
    question: 'How do we schedule a pickup or request a site assessment?',
    answer:
      'Submit your requirement on our Contact page, call +91 81058 02463, or message us directly on WhatsApp. Our operations team conducts a quick site assessment if required and responds within 24 hours with a tailored plan.',
  },
];
