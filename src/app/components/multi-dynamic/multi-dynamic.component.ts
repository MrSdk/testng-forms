import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-multi-dynamic',
  templateUrl: './multi-dynamic.component.html',
  styleUrls: ['./multi-dynamic.component.css']
})
export class MultiDynamicComponent implements OnInit {
  FormDriver;
   
  constructor(private fb: FormBuilder) {
    this.FormDriver = this.fb.group({
       username: [''],
       cars: this.fb.array([
         
       ])
    })
     
  }

  ngOnInit(): void {
  }

  get cars(){
    return this.FormDriver.get('cars') as FormArray
  } 

  clicked(){
    console.log(this.FormDriver.value);
    
  }

  addCar(){
    this.cars.push(
      this.fb.group({
        color: [""],
        name: [""]
      })
    )
  }

  removeCar( i ){
    this.cars.removeAt(i)
  }

}
