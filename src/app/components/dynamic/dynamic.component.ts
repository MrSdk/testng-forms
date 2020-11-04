import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {
  FormTeacher;
  
  //  = new FormGroup({
  //   name: new FormControl(''),
  //   students: new FormArray([
  //     new FormControl(0)
  //   ])
  // });

  constructor(private fb: FormBuilder) {
    this.FormTeacher = this.fb.group({
       name: [''],
       age: [null],
       students: this.fb.array([
         this.fb.control('aaa'),
         this.fb.control('bbb'),
         this.fb.control('ccc')
       ])
    })

    // this.students.push( new FormControl(1) ) 
    
  }

  ngOnInit(): void {
  }

  removeStudent(index){
    this.students.removeAt(index)
  }

  addStudent(){
    this.students.push( this.fb.control('') );
  }

  get students(){
    return this.FormTeacher.get('students') as FormArray
  }

  clicked(){
    for( let contr of this.students.controls ){
      console.log(contr.value);
      
    }
    
  }
}
