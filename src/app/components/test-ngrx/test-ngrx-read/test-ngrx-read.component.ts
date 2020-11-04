import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/ngrx/app.state';

@Component({
  selector: 'app-test-ngrx-read',
  templateUrl: './test-ngrx-read.component.html',
  styleUrls: ['./test-ngrx-read.component.css']
})
export class TestNgrxReadComponent implements OnInit {
  @Output() UserId: EventEmitter<number> = new EventEmitter();

  public mocUsers = [];

  constructor(private store: Store<AppState>) { 
    this.getMocUsers()
  }

  ngOnInit(): void {
  }

  getMocUsers(){
    this.store.select('mocUser').subscribe((result) => {
      this.mocUsers = result;
    })
  }

  edit(i){
    this.UserId.next(i);
  }

}
