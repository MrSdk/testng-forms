import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { from, interval, Subscription, merge, of } from 'rxjs';
import { map, take, mapTo } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  @ViewChild('container',{ read: ElementRef, static: true }) container: ElementRef;
  @ViewChild('textArea',{ read: ElementRef, static: true }) textArea: ElementRef;
  @ViewChild('ofOperator',{ read: ElementRef, static: true }) ofOperator: ElementRef;

  public myData = [10,25,35,50,100];
  public newCreatedArray = [];
  public subscriber: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.createNewArray('this.myData');
    this.setIntervalFunc();
    this.mergedObservable();
    this.createOfObservable();
  }

  createOfObservable(){
    of(this.myData).subscribe(val => { 
      
      this.ofOperator.nativeElement.innerHTML = val // this.myData
    })
  }

  mergedObservable(){
    const intervalA = interval(1300).pipe( take( 5 ), mapTo('intervalA') );
    const intervalB = interval(1000).pipe( take( 5 ), mapTo('intervalB') );

    // subscribe to many observables whith on subscription
    merge(intervalA,intervalB).subscribe(val => {
      this.textArea.nativeElement.innerHTML += val + '\n'
    })
  }

  createNewArray(arr: any){  
    from(arr).subscribe(data => {
      this.newCreatedArray.push(data)
    })
  }

  setIntervalFunc(){
    this.subscriber = interval(1000)
    .pipe(
      take(6)
      // map(val => {
      //   if(val < 5){
      //     return val;
      //   }else{
      //  return undefined;
      //   }
      // } )
    )
    .subscribe(val => {
      this.container.nativeElement.innerHTML = val;

      if( val == 10 ){
        this.subscriber.unsubscribe()
      }
    })
  }

}
