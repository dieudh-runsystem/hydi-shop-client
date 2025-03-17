import { Product } from './product';

export interface CartItem extends Product {
  quantity: number;
  total: number;
}

export interface CartSummaryData {
  subtotal: number;
  promoCode?: string;
}

export interface CartState {
  items: CartItem[];
  // summary: number;
}
