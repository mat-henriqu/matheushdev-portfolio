
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  image: string;
  comments?: string;
}

export interface CartState {
  items: ServiceItem[];
}
