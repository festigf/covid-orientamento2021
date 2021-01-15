import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Stato } from '../class/stato.model';
import { RicercaService } from '../class/ricerca.service';

@Component({
  selector: 'app-stati',
  templateUrl: './stati.component.html',
  styleUrls: ['./stati.component.css']
})
export class StatiComponent implements OnInit {

  @ViewChild('query', { static: false }) query: ElementRef;
  stato: Stato[];
  error: boolean = false;

  constructor(private ricercaStato: RicercaService, private router: Router) { }

  ngOnInit(): void {
  }

  cerca(){
    let text = this.query.nativeElement.value;
    console.log(text);
    if(text != ""){
      this.ricercaStato.getRicercaStato(text).subscribe((dati) => {
        if(dati.length > 0) {
          this.stato = dati;
          console.log(this.stato);
          this.error = false;
        } 
        else {
          this.error = true;
          setTimeout(() => {
            this.error = false;
          }, 10000)
        }
      })
    }
    else {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 10000)
    }   
  }

}
