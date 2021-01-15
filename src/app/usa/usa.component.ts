import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../class/ricerca.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usa } from '../class/usa.model';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-usa',
  templateUrl: './usa.component.html',
  styleUrls: ['./usa.component.css']
})
export class UsaComponent implements OnInit {

  usa: Usa[];
  county: any = [];
  death: any = [];
  case: any = [];

  constructor(private tabella: RicercaService, private router: Router) { }

  ngOnInit(): void {
    this.tabella.getGrafico().subscribe((dati) => {
      this.usa = dati;
      console.log(this.usa);

      this.getDati();
      console.log(this.county);
      console.log(this.death);
      console.log(this.case);

      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.county,
          datasets: [{
            label: 'Casi totali',
            data: this.case,
            backgroundColor: 'rgb(36, 43, 255)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          }]
        }
      });

      var ctx = document.getElementById('death');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.county,
          datasets: [{
            label: 'Decessi totali',
            data: this.death,
            backgroundColor: 'rgb(255, 64, 75)',
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1
          }]
        }
      });
    });
  }

  getDati() {
    for (let i = 0; i < this.usa.length; i++) {
      this.county.push(this.usa[i].state);
      this.death.push(parseInt(this.usa[i].death));
      this.case.push(parseInt(this.usa[i].case));
    }
  }
}
