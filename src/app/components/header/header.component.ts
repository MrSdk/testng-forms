import { Component, OnInit } from '@angular/core';
import { LocalFunctions } from "../../shared/core/local-functions.service";
import { LocalRoute } from '../../shared/model/LocalRoute.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  routes: LocalRoute[] = [];

  constructor(private locFunc: LocalFunctions) {
    this.routes = this.locFunc.getRoutes()
  }

  ngOnInit(): void {
  }

}
