import { useContext } from 'react';
import { PlacesContext } from '../context';
import {
  BtnMyLocation,
  Loading,
  MapView,
  ReactLogo,
  SearchBar,
} from '../components';

export const HomeScreen = () => {
  const { isLoading } = useContext(PlacesContext);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <MapView />
      <BtnMyLocation />
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
