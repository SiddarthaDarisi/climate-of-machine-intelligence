export type Temp = 'warm' | 'cold' | 'hot';

export type Tag = 'theory' | 'hardware' | 'winter' | 'industry' | 'model';

export interface TimelineEvent {
  id: string;
  year: number;
  title: string;
  who: string;
  body: string;
  tags: Tag[];
  temp: Temp;
  pivot?: boolean;
  impact?: { label: string; text: string };
}

export interface Era {
  id: string;
  name: string;
  years: string;
  temp: Temp;
  note: string;
  weight: number;
  events: TimelineEvent[];
}

export interface FilterOption {
  label: string;
  tag: Tag | 'all';
}
