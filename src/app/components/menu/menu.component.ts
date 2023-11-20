import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos'; 
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public marcas!:  any;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _router: Router
  ){}

  ngOnInit(): void {

    this.loadMarcas();    
  }

  loadMarcas():void{

    this._serviceCubos.getCubosMarca().subscribe(response=>{
      this.marcas=response;
      //console.log(this.marcas);
    })
  }

}
