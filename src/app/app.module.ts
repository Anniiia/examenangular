import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceCubos } from './services/service.cubos';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { appRoutingProviders, routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CubosmarcaComponent } from './components/cubosmarca/cubosmarca.component';
import { DetallescuboComponent } from './components/detallescubo/detallescubo.component';
import { LoginComponent } from './components/login/login.component';
import { AccionesComponent } from './components/acciones/acciones.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CubosmarcaComponent,
    DetallescuboComponent,
    LoginComponent,
    AccionesComponent,
    NuevousuarioComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing, HttpClientModule 
  ],
  providers: [appRoutingProviders, ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
