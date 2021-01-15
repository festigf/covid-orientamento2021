import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Date } from '../class/date.model';
import { RicercaService } from '../class/ricerca.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  @ViewChild('date', { static: false }) data: ElementRef;
  casi: Date[];
  error: boolean = false;

  constructor(private ricercaData: RicercaService, private router: Router) { }

  ngOnInit(): void {  
  }

  cerca(){
    let text = this.data.nativeElement.value;
    console.log(text);
    if(text != ""){
      this.ricercaData.getRicercaData(text).subscribe((dati) => {
          this.casi = dati;
          console.log(this.casi);
          this.error = false;
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
