import './App.css';
import worldMap from './assets/world_map.png';


import { GetAllCountries } from './api/GetAllCountries.js';
import {useEffect, useState} from "react";
import {GetCountriesDetails} from "./Components/GetCountryDetails.js";
import {sortCountriesByPopulationAsc, sortCountriesByPopulationDesc} from "./helpers/sortCountriesByPopulation.js";
import regionColorCode from "./helpers/regionColorCode.js";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";

"./Components/GetCountryDetails";




function App() {

    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const fetchCountries = async () => {
        const response = await GetAllCountries();
        const detailedCountries = GetCountriesDetails(response);
        const sortedCountries = sortCountriesByPopulationAsc(detailedCountries);
        setCountries(sortedCountries);

        console.log("Countries: ", detailedCountries);
    };



    useEffect(() => {
        fetchCountries();
    }, []);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );





    return (
        <>
            <div className="outer-container">
                <h1>Countries of the World</h1>
                <img src={worldMap} alt="worldmap in regions"/>
                <div className="search-button-container">
                    <SearchBar onSearch={handleSearch}/>

                        <button className="button" onClick={() => { fetchCountries(); setSearchQuery('');}} disabled={searchQuery === ''}>Get All Countries</button>
    <button className="button" onClick={() => setCountries(sortCountriesByPopulationAsc(filteredCountries))}>Sort by population Ascending</button>
    <button className="button" onClick={() => setCountries(sortCountriesByPopulationDesc(filteredCountries))}>Sort by population Descending</button>
                </div>
            </div>



                <div className="country-container">
                    {filteredCountries.map((country, index) => (
                            <div className="country" key={index} style={{ color: regionColorCode(country.region) }}>
                                <h2>{country.name.common}</h2>
                                <img src={country.flags} alt={country.name + " flag"}/>
                                <p>{country.name.common} is situated in {country.region} and the capital is {country.capital}</p>
                                <p>It has a population of {country.population} million people and it borders with {country.borders} neighboring countries</p>
                               <p>Websites can be found on {country.tld} domain's</p>
                            </div>
                    ))}
                    {filteredCountries.length === 0 && searchQuery !== '' && <p className="notFound">The country you searched was not found. Please check your search criteria: '{searchQuery}'. </p>}
                </div>


                        </>
                        )
                    }

export default App
