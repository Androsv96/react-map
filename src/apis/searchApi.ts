import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoiYW5kcm9zdiIsImEiOiJja3licmkxbncwMHRjMnBuMzVja2d4eGw3In0.nLi0_BDpuEWiOvkUQB0Y8g',
  },
});

export default searchApi;
