export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}
