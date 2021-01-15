import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../class/ricerca.service';
import { Router } from '@angular/router';
import { Continente } from '../class/continente.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-continenti',
  templateUrl: './continenti.component.html',
  styleUrls: ['./continenti.component.css']
})
export class ContinentiComponent implements OnInit {

  mondo: Continente[];

  constructor(private ricercaContinenti: RicercaService, private router: Router) { }

  ngOnInit(): void {
    this.ricercaContinenti.getContinenti().subscribe((dati) => {
      this.mondo = dati;
      console.log(this.mondo);

      var ctx = document.getElementById('graficoDati');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [this.mondo[0].continent, this.mondo[1].continent, this.mondo[2].continent, this.mondo[3].continent,
          this.mondo[4].continent, this.mondo[5].continent],
          datasets: [{
            label: 'Decessi',
            data: [this.mondo[0].deaths, this.mondo[1].deaths, this.mondo[2].deaths, this.mondo[3].deaths,
            this.mondo[4].deaths, this.mondo[5].deaths],
            backgroundColor: 'rgb(255, 64, 75)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          }
        ]
        }
      });

      var ctx2 = document.getElementById('graficoDati2');
      var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: [this.mondo[0].continent, this.mondo[1].continent, this.mondo[2].continent, this.mondo[3].continent,
          this.mondo[4].continent, this.mondo[5].continent],
          datasets: [{
            label: 'Casi',
            data: [this.mondo[0].cases, this.mondo[1].cases, this.mondo[2].cases, this.mondo[3].cases,
            this.mondo[4].cases, this.mondo[5].cases],
            backgroundColor: 'rgb(23, 27, 255)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          },{
            label: 'Guariti',
            data: [this.mondo[0].recovered, this.mondo[1].recovered, this.mondo[2].recovered, this.mondo[3].recovered,
            this.mondo[4].recovered, this.mondo[5].recovered],
            backgroundColor: 'rgb(23, 255, 31)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          }
        ]
        }
      });

      var ctx3 = document.getElementById('graficoDati3');
      var myChart3 = new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: [this.mondo[0].continent, this.mondo[1].continent, this.mondo[2].continent, this.mondo[3].continent,
          this.mondo[4].continent, this.mondo[5].continent],
          datasets: [{
            label: 'Decessi di oggi',
            data: [this.mondo[0].todayDeaths, this.mondo[1].todayDeaths, this.mondo[2].todayDeaths, this.mondo[3].todayDeaths,
            this.mondo[4].todayDeaths, this.mondo[5].todayDeaths],
            backgroundColor: 'rgb(255, 64, 75)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          }
        ]
        }
      });
    });
  }

}
