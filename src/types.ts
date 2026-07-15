export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string[];
}

export interface Partner {
  name: string;
  designation: string;
  membershipNo: string;
  membershipTimeline: string;
  certificateOfPracticeSince: string;
  languages: string[];
  qualifications: string[];
  highlights: string[];
  areasOfExpertise: string[];
  bio: string;
  imageUrl: string;
}

export interface Article {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  publishDate: string;
  readTime: string;
  author: string;
  imageUrl: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceRequired: string;
  message: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface CoreValue {
  title: string;
  description: string;
  iconName: string;
}

export interface Industry {
  title: string;
  description: string;
  iconName: string;
}
