export interface LocationState {
  accessToken: string;
}

export interface Products {
  id: number;
  title: string;
  price: number;
  amount: number;
  description: string;
  category: string;
  image: string;
}

export interface ProductCardProps {
  data: Products;
}

export enum SortOptions {
  Featured = "featured",
  Highest = "highest",
  Lowest = "lowest",
}
