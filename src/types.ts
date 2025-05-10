export interface Product {
  id: number;
  name: string;
  price: {
    main: number;
    fractional: number;
  };
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  totalPrice: number;
  items: CartItem[];
}
