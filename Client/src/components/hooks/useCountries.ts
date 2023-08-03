import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Country {
  name: any;
}

const useCountries = () => {
  const fetchCountries = () =>
    axios.get<Country[]>('https://restcountries.com/v3.1/all').then(res => {
      const countriesData = res.data.map(country => ({
        name: country.name.common,
      }));
      return countriesData.sort((a, b) => a.name.localeCompare(b.name));
    });

  return useQuery<Country[], Error>({
    queryKey: ['countries'],
    queryFn: fetchCountries,
  });
};

export default useCountries;
