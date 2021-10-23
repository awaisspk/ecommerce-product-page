import React from 'react';

type Product = {
  pricePerItem: number;
  totalItems: number;
};

type ProductContext = {
  product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
};

export const ProductContext = React.createContext({} as ProductContext);
