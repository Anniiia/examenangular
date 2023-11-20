import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
    
  }
  @ViewChild('cajanombre') cajaNombreRef!: ElementRef;
  @ViewChild('cajacontrasenia') cajaConstraseniaRef!: ElementRef;

  public mensaje!: string;

  constructor(private _serviceCubos: ServiceCubos,
    private _router: Router,
    ){}

  login():void{
    var email=this.cajaNombreRef.nativeElement.value;
    var pass=this.cajaConstraseniaRef.nativeElement.value;
    var newUser= new Usuario(email, pass);

    this._serviceCubos.getToken(newUser).subscribe(response=>{
      this._router.navigate(["/acciones/"+response.response]);
      console.log('ok');

      // console.log(response);
      
    },error=>{

      console.log('fail login');
      this.mensaje='Login incorrento';

    })
  }


}
