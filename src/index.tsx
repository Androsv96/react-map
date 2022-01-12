/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom';
import { MapsApp } from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl';

mapboxgl.accessToken = 'token';

if (!navigator.geolocation) {
  alert('Your browser doesnt support gelocation');
  throw new Error('Your browser doesnt support gelocation');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
