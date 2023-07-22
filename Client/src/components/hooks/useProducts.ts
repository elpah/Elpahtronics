import Product from "../../productType";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTodos =()=>{
    const fetchProducts = () => 
     axios
          .get<Product[]>("http://localhost:8000/api/products/available")
          .then((res) => res.data);
          
          return useQuery<Product[], Error>({
            queryKey: ["products"],
            queryFn: fetchProducts,
          });
      };


export default useTodos


