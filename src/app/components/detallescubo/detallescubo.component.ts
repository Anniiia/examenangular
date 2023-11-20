import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-detallescubo',
  templateUrl: './detallescubo.component.html',
  styleUrls: ['./detallescubo.component.css']
})
export class DetallescuboComponent implements OnInit{
  public comentarios!: any; 
  public cubo!: any;
  constructor(
    private _serviceCubos: ServiceCubos,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ){}
  
  ngOnInit(): void {
    this._activeRoute.params.subscribe((parametros:Params)=>{
      var id= parametros['id'];
      this._serviceCubos.getComentarios(id).subscribe(response=>{
        this.comentarios=response;
      })
      this._serviceCubos.getDetallesCubo(id).subscribe(response=>{
        this.cubo=response;
      })
    })
    
  }

}
