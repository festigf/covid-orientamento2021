import { Component, OnInit } from '@angular/core';
import { Home } from '../class/home.model';
import { RicercaService } from '../class/ricerca.service';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  casi: Home[];
  world: Home[];
  stati: any = [];
  death: any = [];
  cases: any = [];

  constructor(private ricercaHome: RicercaService, private router: Router) { }

  ngOnInit(): void {

    this.ricercaHome.getCasiNelMondo().subscribe((dati) => {
      this.casi = dati;
      console.log(this.casi);
    });

    this.ricercaHome.getCasiStati().subscribe((dati) => {
      this.world = dati;
      console.log(this.world);

      this.getDati();
      console.log(this.death);
      console.log(this.cases);
      console.log(this.stati);

      var ctx = document.getElementById('myChart');
      var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.stati,
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
    for (let i = 1; i < 22; i++) {
      this.stati.push(this.world[i].country_text);
      this.death.push(parseFloat(this.world[i].total_Deaths));
      this.cases.push(parseFloat(this.world[i].total_Cases));
    }
  }
}
