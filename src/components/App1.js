import { useState } from 'react';
import { BreedSelect } from './BreedSelect/BreedSelect';
import { Layout } from './Layout/Layout.styled';
import { fetchDogByBreed } from './services/api';
import { Dog } from './Dog/Dog';
import { DogSkeleton } from './Dog/DogSkeleton';
import { ErrorMessage } from './Error/ErrorMessage';

export const App1 = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = async breedId => {
    try {
      setIsLoading(true);
      setError(null);
      const dog = await fetchDogByBreed(breedId);
      setDog(dog);
    } catch (error) {
      setError(
        'У нас не получилось взять данные о собачке, попробуйте еще разочек 😇'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <BreedSelect onSelect={fetchDog} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {isLoading && <DogSkeleton />}
      {dog && !isLoading && <Dog dog={dog} />}
    </Layout>
  );
};
