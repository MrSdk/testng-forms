import { Component, OnInit } from '@angular/core';

import { Store } from "@ngrx/store";
import { AppState } from "./../../../ngrx/app.state";
import { Tutorial } from "./../../../shared/model/tutorial.model";
import * as TutorialActions from "./../../../ngrx/actions/tutorial.action"

@Component({
  selector: 'app-ngrx-create',
  templateUrl: './ngrx-create.component.html',
  styleUrls: ['./ngrx-create.component.css']
})
export class NgrxCreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  save(name,url){
    this.store.dispatch(new TutorialActions.AddTutorial({ name: name, url: url }))
  }

}
