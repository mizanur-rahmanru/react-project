import { use, useState } from 'react';
import type { CountryType } from '../../type';
import Country from '../country/Country';
import './countries.css';
export interface CountriesProps{
    countriesPromise: Promise<CountryType[]>
}

export default function Countries({countriesPromise}: CountriesProps){
    
    const[visitedCountries, setVisitedCountries] =useState<CountryType[]>([]);

    const countries = use(countriesPromise);

    const [visitedFlags, setVisitedFlags] = useState<string[]>([])

    const handleVisitedFlag = (flag: string):void=>{
        
        if(visitedFlags.includes(flag)){
            const remainingFlag = visitedFlags.filter(f=>f!==flag);
            setVisitedFlags(remainingFlag);
        }
        else{
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
        }
    }


    const handleVisitedCountry = (country: CountryType):void =>{
      
        if(visitedCountries.includes(country)){
            const remainingCountries = visitedCountries.filter(c=> c!==country);
            setVisitedCountries(remainingCountries);
        }
        else{
             const  newVisitedCountries = [...visitedCountries,country];
             setVisitedCountries(newVisitedCountries);

        }

      
       
    }

    // console.log(countries);
    return(
        <div>
            <h2>Countries</h2>
            <h4>Visited Countries: {visitedCountries.length}</h4>
            <h4>VIsited Flags:{visitedFlags.length}</h4>
                <div className='countries'>
                    {
                    countries.map(country =><Country 
                        key= {country.ccn3.ccn3}
                        country = {country}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlag={handleVisitedFlag}>
                        </Country>)
                }
                </div>
          
        </div>
    );
}