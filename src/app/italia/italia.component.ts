import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../class/ricerca.service';
import { Router } from '@angular/router';
import { Italia } from '../class/italia.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-italia',
  templateUrl: './italia.component.html',
  styleUrls: ['./italia.component.css']
})
export class ItaliaComponent implements OnInit {

  italy: Italia[] = [];

  constructor(private ricercaItalia: RicercaService, private router: Router) { }

  ngOnInit(): void {
    this.ricercaItalia.getCasiItalia().subscribe((dati) => {
      this.italy = dati;
      console.log(this.italy);

      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Casi totali", "Decessi totali", "Guariti totali", "Positivi totali"],
          datasets: [{
            label: 'Dati',
            data: [parseInt(this.italy[0].totalConfirmed), parseInt(this.italy[0].totalDeaths),
            parseInt(this.italy[0].totalRecovered), parseInt(this.italy[0].activeCases)],
            backgroundColor: ['rgb(63, 15, 253)', 'rgb(243, 15, 11)', 'rgb(16, 219, 11)', 'rgb(63, 110, 253)'],
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          }]
        }
      });

      var ctx2 = document.getElementById('myChart2');
      var myChart2 = new Chart(ctx2, {
        type: 'bar',
        data: {
          labels: ["Nuovi casi", "Nuovi decessi", "Casi critici"],
          datasets: [{
            label: "Dati",
            data: [parseInt(this.italy[0].dailyConfirmed), parseInt(this.italy[0].dailyDeaths), parseInt(this.italy[0].totalCritical)],    
            backgroundColor: ['rgb(63, 15, 253)', 'rgb(243, 15, 11)', 'rgb(227, 51, 38)'],
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          }]
        }
      });
    });
  }

}
