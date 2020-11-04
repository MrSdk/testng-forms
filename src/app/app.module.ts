import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
 
import { ReactiveFormsModule, FormsModule } from "@angular/forms"
import { LocalFunctions } from './shared/core/local-functions.service';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { MultiDynamicComponent } from './components/multi-dynamic/multi-dynamic.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { StoreModule } from '@ngrx/store'; 

import { tutorialReducer } from "./ngrx/reducers/tutorial.reducer";
import { mocUserReducer } from "./ngrx/reducers/moc-user.reducer"

import { NgrxCreateComponent } from './components/ngrx/ngrx-create/ngrx-create.component';
import { NgrxReadComponent } from './components/ngrx/ngrx-read/ngrx-read.component';
import { NgrxLayoutComponent } from './components/ngrx/ngrx-layout/ngrx-layout.component';
//import { TestNgrxComponent } from './components/test-ngrx/test-ngrx.component';
import { TestNgrxCreateComponent } from './components/test-ngrx/test-ngrx-create/test-ngrx-create.component';
import { TestNgrxReadComponent } from './components/test-ngrx/test-ngrx-read/test-ngrx-read.component';
import { TestNgrxUpdateComponent } from './components/test-ngrx/test-ngrx-update/test-ngrx-update.component'

import { HttpClientModule } from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    LoginComponent,
    HomeComponent,
    DynamicComponent,
    MultiDynamicComponent,
    RxjsComponent,
    NgrxCreateComponent,
    NgrxReadComponent,
    NgrxLayoutComponent,
   // TestNgrxComponent,
    TestNgrxCreateComponent,
    TestNgrxReadComponent,
    TestNgrxUpdateComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({
      tutorial: tutorialReducer,
      mocUser: mocUserReducer
    }, {})
  ],
  providers: [ LocalFunctions ],
  bootstrap: [AppComponent]
})
export class AppModule { }
