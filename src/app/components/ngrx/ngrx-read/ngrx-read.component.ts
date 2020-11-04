import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from './../../../ngrx/app.state'
import { Tutorial } from './../../../shared/model/tutorial.model';
import { Observable } from 'rxjs';
import * as TutorialActions from "./../../../ngrx/actions/tutorial.action";

@Component({
  selector: 'app-ngrx-read',
  templateUrl: './ngrx-read.component.html',
  styleUrls: ['./ngrx-read.component.css']
})
export class NgrxReadComponent implements OnInit {
  public tutorials: Observable<Tutorial[]> ;
  subTutorials: Tutorial[]

  constructor(private store: Store<AppState>  ) { 
    this.tutorials = store.select('tutorial')
    this.tutorials.subscribe((res) => {
      this.subTutorials = res
    })
  }

  ngOnInit(): void {
    
  }

  remove(index){
    this.store.dispatch( new TutorialActions.RemoveTutorial( index ) )
  }

}
