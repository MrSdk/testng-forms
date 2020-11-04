import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public FG: FormGroup = new FormGroup({
  //   username: new FormControl('',[Validators.required]),
  //   password: new FormControl('',[Validators.required,Validators.minLength(8)])
  // })
  FG;

  constructor(private Fb: FormBuilder) {
    this.FG = this.Fb.group({
      username: ['',[Validators.required]],
      password: ['',[Validators.minLength(8),Validators.required]]
    })  
  }

  ngOnInit(): void {

    
  }

  login(){ 
    // save form
  }

  get username(){
    return this.FG.get("username")
  }

  get password(){
    return this.FG.get("password")
  }

}
