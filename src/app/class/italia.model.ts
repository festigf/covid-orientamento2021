export class Italia {
    country: string;
    totalConfirmed: string;
    totalDeaths: string;
    totalRecovered: string;
    dailyConfirmed: string;
    dailyDeaths: string;
    activeCases: string;
    totalCritical: string;
    totalConfirmedPerMillionPopulation: string;
    totalDeathsPerMillionPopulation: string;
    lastUpdate: string;

    constructor(country: string, totalConfirmed: string, totalDeaths: string, totalRecovered: string, dailyConfirmed: string,
        dailyDeaths: string, activeCases: string, totalCritical: string, totalConfirmedPerMillionPopulation: string,
        totalDeathsPerMillionPopulation: string, lastUpdate: string) {
        this.country = country
        this.totalConfirmed = totalConfirmed;
        this.totalDeaths = totalDeaths;
        this.totalRecovered = totalRecovered;
        this.dailyConfirmed = dailyConfirmed;
        this.dailyDeaths = dailyDeaths;
        this.activeCases = activeCases;
        this.totalCritical = totalCritical;
        this.totalConfirmedPerMillionPopulation = totalConfirmedPerMillionPopulation;
        this.totalDeathsPerMillionPopulation = totalDeathsPerMillionPopulation;
        this.lastUpdate = lastUpdate;
    }
}