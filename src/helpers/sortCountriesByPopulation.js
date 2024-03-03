export function sortCountriesByPopulationAsc(countries) {
    const copiedCountries = [...countries];
    return copiedCountries.sort((a, b) => a.originalPopulation - b.originalPopulation);
}

export function sortCountriesByPopulationDesc(countries) {
    const copiedCountries = [...countries];
    return copiedCountries.sort((a, b) => b.originalPopulation - a.originalPopulation);
}