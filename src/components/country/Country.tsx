import { useState } from "react";
import type { CountryType } from "../../type";
import './country.css';
export interface CountryProps {
    country: CountryType
    handleVisitedCountry:(country:CountryType) => void
    handleVisitedFlag: (flag: string) => void
}

export default function Country({country, handleVisitedCountry, handleVisitedFlag}:CountryProps){
    
    const [visited, setVisited] = useState<boolean>(false);

    const handleVisited = () => {
        setVisited(!visited);
        handleVisitedCountry(country);
    }
    
    return(
        <div className={`country ${visited ? 'country-visited' : 'country-color'}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.flags.png} alt="" />
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital}</p>
            <button onClick={handleVisited}>
                {visited? 'Visited' : 'Mark as Visited'}
            </button>
            <button
                onClick={()=>handleVisitedFlag(country.flags.flags.png)}
            >Add FLag as visited</button>
        </div>
    )
}