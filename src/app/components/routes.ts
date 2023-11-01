import { Routes } from "@angular/router";
import { AboutusComponent } from "./aboutus/aboutus.component";
import { HomeComponent } from "./home/home.component";

const routeConfig: Routes = [
    {
     path:'',
     component: HomeComponent,
     title: 'Home'
    },

    {
        path:'about-us',
        component: AboutusComponent,
        title: 'About us'
    }
];

export default routeConfig;