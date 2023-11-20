import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Usuario } from "../models/usuario";
import { NuevoUsuario } from "../models/nuevousuario";



@Injectable()

export class ServiceCubos{
    constructor(private _http: HttpClient){}

    getCubos():Observable<any>{
        var request='api/cubos';
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    getCubosMarca(){
        var request='api/cubos/marcas';
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    getCubosPorMarca(marca:string){
        var request='api/cubos/cubosmarca/'+marca;
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    getComentarios(id:string){
        var request='api/comentarioscubo/getcomentarioscubo/'+id;
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }

    getDetallesCubo(id:string){
        var request='api/cubos/'+id;
        var url=environment.urlApiCubos+request;
        return this._http.get(url);
    }
    getToken(usuario: Usuario):Observable<any>{
        var json= JSON.stringify(usuario);
        var header= new HttpHeaders().set("Content-Type", "application/json");
        var request='api/manage/login';
        var url= environment.urlApiCubos + request;
        return this._http.post(url, json,{headers:header});
    }

    insertUsuario(usuario:NuevoUsuario, token:string):Observable<any>{
        var json= JSON.stringify(usuario);
        var header= new HttpHeaders({'authorization': 'bearer '+token}).set("Content-Type", "application/json");
        var request='api/manage/registrousuario';
        var url= environment.urlApiCubos + request;
        return this._http.post(url, json,{headers:header});
    }


}
