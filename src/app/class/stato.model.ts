export class Stato {
    country_text: string;
    activeCases_text: string;
    lastUpdate: string;
    newCases_text: string;
    newDeaths_text: string;
    totalCases_text: string; 
    totalDeaths_text: string;
    totalRecovered_text: string;

    constructor(country_text: string, activeCases_text: string, lastUpdate: string, newCases_text: string, newDeaths_text: string,
        totalCases_text: string, totalDeaths_text: string, totalRecovered_text: string) {
            this.country_text = country_text;
            this.activeCases_text = activeCases_text;
            this.lastUpdate = lastUpdate;
            this.newCases_text = newCases_text;
            this.newDeaths_text = newDeaths_text;
            this.totalCases_text = totalCases_text;
            this.totalDeaths_text = totalDeaths_text;
            this.totalRecovered_text = totalRecovered_text;
    }
}