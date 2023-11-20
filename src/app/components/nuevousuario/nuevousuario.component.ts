
import { NuevoUsuario } from 'src/app/models/nuevousuario';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent {
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajaemail') cajaEmailRef!: ElementRef;
  @ViewChild('cajacontrasenia') cajaConstraseniaRef!: ElementRef;

  public mensaje!: string;

  constructor(private _serviceCubos: ServiceCubos,
    private _router: Router,
    ){}

  insert():void{
    var nombre=this.cajaNombreRef.nativeElement.value;
    var email=this.cajaEmailRef.nativeElement.value;
    var pass=this.cajaConstraseniaRef.nativeElement.value;
    var newUser= new NuevoUsuario(0,nombre,email, pass);

    // this._activeRoute.params.subscribe((parametros:Params)=>{
    //   var token= parametros['token'];
    //   this._serviceEmpleados.getEmpleados(token).subscribe(response=>{
    //     this.empleados=response;
    //   })
    // })
  }

}
