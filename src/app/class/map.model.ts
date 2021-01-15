export class Map {
    country: string;
    countryCode: string;
    lat: number;
    lng: number;
    totalConfirmed: string;
    totalDeaths: string;
    totalRecovered: string;

    constructor(country: string, countryCode: string, lat: number, lng: number, totalConfirmed: string,
        totalDeaths: string, totalRecovered: string){
            this.country = country;
            this.countryCode = countryCode;
            this.lat = lat;
            this.lng = lng;
            this.totalConfirmed = totalConfirmed;
            this.totalDeaths = totalDeaths;
            this.totalRecovered = totalRecovered;
    }
}