import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css']
})
export class CubosmarcaComponent implements OnInit{

  public cubos!: any; 
  constructor(
    private _serviceCubos: ServiceCubos,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      var marca= parametros['marca'];
      this._serviceCubos.getCubosPorMarca(marca).subscribe(response=>{
        this.cubos=response;
      })
    })
    
  }

  

}
