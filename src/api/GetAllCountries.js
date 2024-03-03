import RestCountriesApi from './RestCountriesApi.js';

export const GetAllCountries = async () => {
    const response = await RestCountriesApi.get(`all`);
    console.log("get all countries: ", response.data);
    return response.data;
}

