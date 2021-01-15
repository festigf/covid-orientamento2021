import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Home } from './home.model';
import { Map } from './map.model';
import { Stato } from './stato.model';
import { Analisi } from './analisi.model';
import { Usa } from './usa.model';
import { Date } from './date.model';
import { Italia } from './italia.model';
import { Continente } from './continente.model';

@Injectable({
  providedIn: 'root'
})
export class RicercaService {

  constructor(private httpClient: HttpClient) { }

  getCasiNelMondo(): Observable<any> {
    return this.httpClient.get<any>('https://covid-19.dataflowkit.com/v1')
      .pipe(map((dati: any) => {
        console.log(dati);
        let casi: Analisi[] = [];
        let element = dati[0];
        casi.push(new Analisi(
          element["Active Cases_text"],
          element["New Cases_text"],
          element["New Deaths_text"],
          element["Total Cases_text"],
          element["Total Deaths_text"],
          element["Total Recovered_text"]
        ));
        return casi;
      }))
  }

  getCasiPerMappa(): Observable<any> {
    return this.httpClient.get<any>('http://api.coronatracker.com/v3/stats/worldometer/country')
      .pipe(map((dati: any) => {
        console.log(dati);
        let mappa: Map[] = [];
        for (let i = 0; i < dati.length; i++) {
          let element = dati[i];
          mappa.push(new Map(
            element.country,
            element.countryCode,
            element.lat,
            element.lng,
            element.totalConfirmed,
            element.totalDeaths,
            element.totalRecovered
          ));
        }
        return mappa;
      }));
  }

  getRicercaStato(query: string): Observable<any> {
    return this.httpClient.get<any>('https://covid-19.dataflowkit.com/v1')
      .pipe(map((dati: any) => {
        console.log(dati);
        let stato: Stato[] = [];
        for (let i = 0; i < dati.length; i++) {
          if (dati[i].Country_text == query) {
            let element = dati[i];
            stato.push(new Stato(
              element["Country_text"] != "" ? element["Country_text"] : "N/A",
              element["Active Cases_text"] != "" ? element["Active Cases_text"] : "N/A",
              element["Last Update"] != "" ? element["Last Update"] : "N/A",
              element["New Cases_text"] != "" ? element["New Cases_text"] : "N/A",
              element["New Deaths_text"] != "" ? element["New Deaths_text"] : "N/A",
              element["Total Cases_text"] != "" ? element["Total Cases_text"] : "N/A",
              element["Total Deaths_text"] != "" ? element["Total Deaths_text"] : "N/A",
              element["Total Recovered_text"] != "" ? element["Total Recovered_text"] : "N/A"
            ));
          }
        }
        return stato;
      }))
  }

  getGrafico(): Observable<any> {
    return this.httpClient.get<any>('https://finnhub.io/api/v1/covid19/us?token=bt2dq3f48v6scmm1df30')
      .pipe(map((dati: any) => {
        console.log(dati);
        let usa: Usa[] = [];
        for (let i = 0; i < dati.length; i++) {
          let element = dati[i];
          usa.push(new Usa(
            element.state,
            element.case,
            element.death
          ));
        }
        return usa;
      }))
  }

  getCasiStati(): Observable<any> {
    return this.httpClient.get<any>('https://covid-19.dataflowkit.com/v1')
      .pipe(map((dati: any) => {
        console.log(dati);
        let mondo: Home[] = [];
        for (let i = 0; i < dati.length; i++) {
          let element = dati[i];
          mondo.push(new Home(
            element["Active Cases_text"] != "" && element["Active Cases_text"] ? element["Active Cases_text"] : "N/A",
            element["Country_text"] != "" && element["Country_text"] ? element["Country_text"] : "N/A",
            element["Last Update"] != "" && element["Last Update"] ? element["Last Update"] : "N/A",
            element["New Cases_text"] != "" && element["New Cases_text"] ? element["New Cases_text"] : "N/A",
            element["New Deaths_text"] != "" && element["New Deaths_text"] ? element["New Deaths_text"] : "N/A",
            element["Total Cases_text"] != "" && element["Total Cases_text"] ? element["Total Cases_text"] : "N/A",
            element["Total Deaths_text"] != "" && element["Total Deaths_text"] ? element["Total Deaths_text"] : "N/A",
            element["Total Recovered_text"] != "" && element["Total Recovered_text"] ? element["Total Recovered_text"] : "N/A"
          ));
        }
        return mondo;
      }))
  }

  getRicercaData(date: string): Observable<any> {
    return this.httpClient.get<any>('https://covid-api.com/api/reports/total?date=' + date)
      .pipe(map((dati: any) => {
        console.log(dati);
        let info: Date[] = [];
        let element = dati.data;
        info.push(new Date(
          element["date"].toString(),
          element["last_update"].toString(),
          element["confirmed"].toString(),
          element["confirmed_diff"].toString(),
          element["deaths"].toString(),
          element["deaths_diff"].toString(),
          element["recovered"].toString(),
          element["recovered_diff"].toString(),
          element["active"].toString(),
          element["active_diff"].toString(),
          element["fatality_rate"].toString()
        ));
        return info;
      }))
  }

  getCasiItalia(): Observable<any> {
    return this.httpClient.get<any>('http://api.coronatracker.com/v3/stats/worldometer/country?countryCode=it')
      .pipe(map((dati: any) => {
        console.log(dati);
        let italy: Italia[] = [];
        for (let i = 0; i < dati.length; i++) {
          let element = dati[i];
          italy.push(new Italia(
            element["country"].toString(),
            element["totalConfirmed"].toString(),
            element["totalDeaths"].toString(),
            element["totalRecovered"].toString(),
            element["dailyConfirmed"].toString(),
            element["dailyDeaths"].toString(),
            element["activeCases"].toString(),
            element["totalCritical"].toString(),
            element["totalConfirmedPerMillionPopulation"].toString(),
            element["totalDeathsPerMillionPopulation"].toString(),
            element["lastUpdated"].toString().substring(0,10)
          ));
        }
        return italy;
      }))
  }

  getContinenti(): Observable<any> {
    return this.httpClient.get<any>('https://corona.lmao.ninja/v2/continents')
      .pipe(map((dati: any) => {
        console.log(dati);
        let mondo: Continente[] = [];
        for (let i = 0; i < dati.length; i++) {
          let element = dati[i];
          mondo.push(new Continente(
            element.cases.toString(),
            element.todayCases.toString(),
            element.deaths.toString(),
            element.todayDeaths.toString(),
            element.recovered.toString(),
            element.todayRecovered.toString(),
            element.active.toString(),
            element.critical.toString(),
            element.casesPerOneMillion.toString(),
            element.deathsPerOneMillion.toString(),
            element.tests.toString(),
            element.testsPerOneMillion.toString(),
            element.population.toString(),
            element.continent.toString(),
            element.activePerOneMillion.toString(),
            element.recoveredPerOneMillion.toString(),
            element.criticalPerOneMillion.toString()
          ));
        }
        return mondo;
      }))
  }
}


