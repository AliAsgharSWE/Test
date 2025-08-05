export interface MonthlySales {
  month: string;
  sales: number;
}

export interface User {
  name: string;
  contact: string;
  lastInteraction: string;
  status: 'active' | 'inactive';
  salesPerMonth: MonthlySales[];
  region: 'north' | 'south' | 'east' | 'west';
}

export interface QuarterlySales {
  quarter: string;
  sales: number;
}

export interface RegionData {
  region: string;
  customers: number;
  percentage: number;
}
