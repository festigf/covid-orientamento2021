export class Date {
    date: string;
    lastUpdate: string;
    confirmed: string;
    confirmedDiff: string;
    deaths: string;
    deathsDiff: string;
    recovered: string;
    recoveredDiff: string;
    active: string;
    activeDiff: string;
    fatalityRate: string;

    constructor(date: string, lastUpdate: string, confirmed: string, confirmedDiff: string, deaths: string,
        deathsDiff: string, recovered: string, recoveredDiff: string, active: string, activeDiff: string,
        fatalityRate: string) {
            this.date = date;
            this.lastUpdate = lastUpdate;
            this.confirmed = confirmed;
            this.confirmedDiff = confirmedDiff;
            this.deaths = deaths;
            this.deathsDiff = deathsDiff;
            this.recovered = recovered;
            this.recoveredDiff = recoveredDiff;
            this.active = active;
            this.activeDiff = activeDiff;
            this.fatalityRate = fatalityRate;
    }
}