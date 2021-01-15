export class Continente {
    cases: string;
    todayCases: string;
    deaths: string;
    todayDeaths: string;
    recovered: string;
    todayRecovered: string;
    active: string;
    critical: string;
    casesPerOneMillion: string;
    deathsPerOneMillion: string;
    tests: string;
    testsPerOneMillion: string;
    population: string;
    continent: string;
    activePerOneMillion: string;
    recoveredPerOneMillion: string;
    criticalPerOneMillion: string;

    constructor(cases: string, todayCases: string, deaths: string, todayDeaths: string, recovered: string,
        todayRecovered: string, active: string, critical: string, casesPerOneMillion: string,
        deathsPerOneMillion: string, tests: string, testsPerOneMillion: string, population: string,
        continent: string, activePerOneMillion: string, recoveredPerOneMillion: string, criticalPerOneMillion: string) {
            this.cases = cases;
            this.todayCases = todayCases;
            this.deaths = deaths;
            this.todayDeaths = todayDeaths;
            this.recovered = recovered;
            this.todayRecovered = todayRecovered;
            this.active = active;
            this.critical = critical;
            this.casesPerOneMillion = casesPerOneMillion;
            this.deathsPerOneMillion = deathsPerOneMillion;
            this.tests = tests;
            this.testsPerOneMillion = testsPerOneMillion;
            this.population = population;
            this.continent = continent;
            this.activePerOneMillion = activePerOneMillion;
            this.recoveredPerOneMillion = recoveredPerOneMillion;
            this.criticalPerOneMillion = criticalPerOneMillion;
    }
}