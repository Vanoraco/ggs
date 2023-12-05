import { Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const routeConfig: Routes = [
    {
     path:'',
     component: LoginComponent,
     title: 'Home'
    },

    {
        path:'about-us',
        component: AboutusComponent,
        title: 'About us'
    }
];

export default routeConfig;