import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('alertValue',{ static: true }) alertValue: ElementRef;

  locName="";

  constructor() { }

  ngOnInit(): void {
  }

  changeName(name: string){
    // this.locName = name;
    this.alertValue.nativeElement.innerHTML += name;
    
  } 
  
}
