import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Product from '../../productType';

const useProducts = () => {
  const fetchProducts = () =>
    axios.get<Product[]>('http://localhost:8000/api/products/available').then(res => {
      console.log('dataa:', res.data);
      return res.data;
    });

  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export default useProducts;
