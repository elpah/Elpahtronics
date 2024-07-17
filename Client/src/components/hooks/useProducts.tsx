import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Product from '../../productType';

const useProducts = () => {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const fetchProducts = () =>
    axios.get<Product[]>(`https://elpahtronics-backend.vercel.app/api/products/available`).then(res => {
      return res.data;
    });

  return useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
};

export default useProducts;
