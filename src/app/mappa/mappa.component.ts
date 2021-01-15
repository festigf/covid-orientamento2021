import { Component, OnInit } from '@angular/core';
import { RicercaService } from '../class/ricerca.service';
import { Router } from '@angular/router';
import { Map } from '../class/map.model';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mappa',
  templateUrl: './mappa.component.html',
  styleUrls: ['./mappa.component.css']
})
export class MappaComponent implements OnInit {

  mappa: Map[];

  constructor(private ricercaMappa: RicercaService, private router: Router) { }

  ngOnInit(): void {

    const mapbox_token: string = 'pk.eyJ1IjoiZ2lhY29tb21hbmZyZWRpIiwiYSI6ImNrZHlhdHludzFpazIydHNnemI4MjM4eDIifQ.uVwtO-LGpHUYeKlUCqM_mA';

    (mapboxgl as typeof mapboxgl).accessToken = mapbox_token;

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [12, 42.5], // starting position
      zoom: 4.5
    });

    map.addControl(new mapboxgl.NavigationControl());

    this.ricercaMappa.getCasiPerMappa().subscribe((dati) => {
      this.mappa = dati;
      console.log(this.mappa);
      for(var i = 0; i<dati.length; i++){
        new mapboxgl.Marker({ color: getColorCounter(dati[i].totalDeaths) }).setLngLat([dati[i].lng, dati[i].lat]).addTo(map);
      }
    })

    const getColorCounter = count => {
      if (count >= 10000){
        return "purple";
      }
      if (count >= 1000 && count < 10000) {
        return "red"
      }
      return "gray"
    }
  }

}
