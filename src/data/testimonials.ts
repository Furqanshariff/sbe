export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organisation: string;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rajesh-kumar',
    name: 'Rajesh Kumar',
    role: 'Facility Manager',
    organisation: 'Corporate Client, Bengaluru',
    quote:
      'Sri Balaji Enterprises has changed the way we handle our office waste. They always provide dependable recycling services, and their staff are highly professional, which makes our waste management requirement simple and stress-free.',
  },
  {
    id: 'kavya-reddy',
    name: 'Kavya Reddy',
    role: 'Principal',
    organisation: 'Educational Institution, Bengaluru',
    quote:
      "It's simpler for children to learn about recycling, thanks to Sri Balaji's awareness programs, educational sessions, and waste collection services, all very beneficial for our school campus.",
  },
  {
    id: 'sandeep-sharma',
    name: 'Sandeep Sharma',
    role: 'Society Head',
    organisation: 'Shoba Apartments',
    quote:
      'By providing timely junk removal and garbage pickup services, they are saving us a significant number of hours. Affordable, consistent, highly reliable, and eco-friendly, everything a small local society needs today.',
  },
];
