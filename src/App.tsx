
import { Suspense } from 'react';
import './App.css'
import type { CountryType } from './type';
import Countries from './components/countries/countries';

// step-1: create a promise to load data
const countriesPromise = async():Promise<CountryType[]> =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  const data = await res.json();
  return data.countries;
}


function App() {
  return (
    <>
      <h2>Country Visited Information</h2>
      <Suspense fallback={<div>Wait a minutes</div>}>
        <Countries countriesPromise = {countriesPromise()}></Countries>
      </Suspense>
    </>
  )
}

export default App
