export type Language = 'en' | 'kn';

// NOTE: All Kannada strings below are marked TO BE REVIEWED by a native Kannada speaker / client before final publishing.
export const TRANSLATIONS = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      process: 'Our Process',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    cta: {
      schedulePickup: 'Schedule a Pickup',
      exploreServices: 'Explore Services',
      partnerWithUs: 'Partner With Us',
      callNow: 'Call Now',
      whatsappChat: 'Chat on WhatsApp',
      requestQuote: 'Request a Quote',
      readOurStory: 'Read Our Story',
      call: 'Call',
      whatsapp: 'WhatsApp',
    },
    hero: {
      headline: 'Innovative Waste Solutions for a Better Tomorrow.',
      subhead:
        'Reliable, compliant and eco-friendly waste management for homes, businesses, institutions and communities across Bengaluru, from doorstep collection to large-scale recycling and upcycling.',
      experienceBadge: '10+ Years of Experience',
    },
    closingLine: 'Join Us in Creating a Zero-Waste Future.',
  },
  kn: {
    // TO BE REVIEWED — Kannada translations for navigation & key CTAs
    nav: {
      home: 'ಮುಖಪುಟ', // TO BE REVIEWED
      about: 'ನಮ್ಮ ಬಗ್ಗೆ', // TO BE REVIEWED
      services: 'ಸೇವೆಗಳು', // TO BE REVIEWED
      process: 'ನಮ್ಮ ಪ್ರಕ್ರಿಯೆ', // TO BE REVIEWED
      gallery: 'ಗ್ಯಾಲರಿ', // TO BE REVIEWED
      contact: 'ಸಂಪರ್ಕಿಸಿ', // TO BE REVIEWED
    },
    cta: {
      schedulePickup: 'ಪಿಕಪ್ ನಿಗದಿಪಡಿಸಿ', // TO BE REVIEWED
      exploreServices: 'ಸೇವೆಗಳನ್ನು ನೋಡಿ', // TO BE REVIEWED
      partnerWithUs: 'ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ', // TO BE REVIEWED
      callNow: 'ಈಗಲೇ ಕರೆ ಮಾಡಿ', // TO BE REVIEWED
      whatsappChat: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಚಾಟ್ ಮಾಡಿ', // TO BE REVIEWED
      requestQuote: 'ದರ ಪಟ್ಟಿ ಕೇಳಿ', // TO BE REVIEWED
      readOurStory: 'ನಮ್ಮ ಕಥೆಯನ್ನು ಓದಿ', // TO BE REVIEWED
      call: 'ಕರೆ', // TO BE REVIEWED
      whatsapp: 'ವಾಟ್ಸಾಪ್', // TO BE REVIEWED
    },
    hero: {
      headline: 'Innovative Waste Solutions for a Better Tomorrow.',
      subhead:
        'Reliable, compliant and eco-friendly waste management for homes, businesses, institutions and communities across Bengaluru, from doorstep collection to large-scale recycling and upcycling.',
      experienceBadge: '10+ Years of Experience',
    },
    closingLine: 'Join Us in Creating a Zero-Waste Future.',
  },
} as const;
