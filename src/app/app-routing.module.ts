import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DynamicComponent } from './components/dynamic/dynamic.component';
import { MultiDynamicComponent } from './components/multi-dynamic/multi-dynamic.component'; 
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { NgrxLayoutComponent } from './components/ngrx/ngrx-layout/ngrx-layout.component';
import { TestNgrxComponent } from './components/test-ngrx/test-ngrx.component';


const routes: Routes = [
  { path: "", component: LayoutComponent, children: [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "dynamic", component: DynamicComponent },
    { path: "multi-dynamic", component: MultiDynamicComponent },
    { path: "rxjs", component: RxjsComponent },
    { path: "ngrx", component: NgrxLayoutComponent },
    { path: "test-ngrx", component: TestNgrxComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
