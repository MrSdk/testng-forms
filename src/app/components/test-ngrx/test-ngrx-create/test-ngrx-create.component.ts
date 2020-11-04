import { Component, OnInit, Output, EventEmitter } from '@angular/core'; 
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.state';
import * as MocUserActions from "./../../../ngrx/actions/moc-user.action";

@Component({
  selector: 'app-test-ngrx-create',
  templateUrl: './test-ngrx-create.component.html',
  styleUrls: ['./test-ngrx-create.component.css']
})
export class TestNgrxCreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  } 

  create(login,password){
    this.store.dispatch( new MocUserActions.Create( {login,password} ) )
  }

}
