export const roundOffPopulation = (population) => {
    if (population < 1000000) {
        return "less than 1 million";
    } else {
        return Math.round(population / 1000000) + " million";
    }
};