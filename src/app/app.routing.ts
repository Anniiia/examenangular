import { HomeComponent } from "./components/home/home.component";
import { CubosmarcaComponent } from "./components/cubosmarca/cubosmarca.component";
import { DetallescuboComponent } from "./components/detallescubo/detallescubo.component";
import { LoginComponent } from "./components/login/login.component";
import { AccionesComponent } from "./components/acciones/acciones.component";
import { NuevousuarioComponent } from "./components/nuevousuario/nuevousuario.component";


import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes =[
    {
        path: "", component: HomeComponent
    },
    {
        path: "marca/:marca", component: CubosmarcaComponent
    },
    {
        path: "detalles/:id", component: DetallescuboComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "acciones/:token", component: AccionesComponent
    },
    {
        path: "nuevo", component: NuevousuarioComponent
    },
    // {
    //     path: "insert", component: InsertpersonajeComponent
    // },
    // {
    //     path: "modificar", component: ModificarpersonajeComponent
    // },

]


export const appRoutingProviders: any[]=[];


export const routing: ModuleWithProviders<any>=
RouterModule.forRoot(appRoutes);