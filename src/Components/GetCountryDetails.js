import {roundOffPopulation} from "../helpers/roundOfPopulation.js";

export const GetCountriesDetails = (countries) => {


        return countries.map(country => {
            let capital;
            if (country.capital && Array.isArray(country.capital)) {
                capital = country.capital[0] ? country.capital[0] : 'Unknown';
            } else {
                capital = country.capital ? country.capital : 'Unknown';
            }

            let borderCount = 0;
            if (country.borders && Array.isArray(country.borders)) {
                borderCount = country.borders.length;
            }

            let population = roundOffPopulation(country.population);

            let tld;
            if (country.tld && Array.isArray(country.tld)) {
                tld = country.tld[0] ? country.tld[0] : 'Unknown';
            } else {
                tld = 'Unknown';
            }

        return {
            name: country.name,
            capital: capital,
            population: population,
            originalPopulation: country.population,
            region: country.region,
            flags: country.flags.svg,
            description: country.description,
            borders: borderCount,
            tld: tld

        };
    });
};

