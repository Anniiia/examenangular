import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public cubos !: Array<Cubo>;
  constructor(
    private _serviceCubos: ServiceCubos,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    
      this._serviceCubos.getCubos().subscribe(response=>{
        this.cubos=response;
      })
    }
  }



