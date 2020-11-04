import { LocalRoute } from '../model/LocalRoute.model';


export class LocalFunctions {
    private routes: LocalRoute[] = [
        { href: "/", name: "Home" },
        { href: "/login", name: "Login" },
        { href: "/dynamic", name: "Dynamic 1" },
        { href: "/multi-dynamic", name: "Dynamic 2" },
        { href: "/rxjs", name: "Rxjs" } ,
        { href: "/ngrx", name: "NgRx" } ,
        { href: "/test-ngrx", name: "Test-NgRx" }
    ];

    constructor(){ }

    getRoutes(): LocalRoute[] {
        return this.routes;
    }
}