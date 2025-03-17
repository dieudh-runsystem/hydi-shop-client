export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  oldPrice?: number;
  isHot?: boolean;
  isSale?: boolean;
}

