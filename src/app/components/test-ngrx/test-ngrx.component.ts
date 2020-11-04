import { Component, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.state';
import * as MoUserActions from "./../../ngrx/actions/moc-user.action";
import { Action } from '@ngrx/store';


@Component({
  selector: 'app-test-ngrx',
  templateUrl: './test-ngrx.component.html',
  styleUrls: ['./test-ngrx.component.css']
})
export class TestNgrxComponent implements OnInit { 

  constructor(private state: Store<AppState>,private action$: Action) { }

  ngOnInit(): void {
  } 

  editId(id: number){ 
    
    this.state.dispatch( new MoUserActions.GetById(id) );
  
  }
}
