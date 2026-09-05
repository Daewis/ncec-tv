// src/types/index.ts

export interface Program {
    id: string;
    title: string;
    category: string; 
    description: string;
    image: string;
  }
  
  export interface ProgramDetail extends Program {
    quickInfo: { label: string; value: string; icon: string }[];
    aboutParagraphs: string[];
    expectations: string[];
    upcomingDates: { day: string; date: string; label: string }[];
  }
  
  export interface Branch {
    id: string;
    name: string;
    district: string;
    address: string;
    pastor: string;
    lat: number;
    lng: number;
  }