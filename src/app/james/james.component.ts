import { Component, OnInit } from '@angular/core';
import { JugadoresAndresOspinaService, Jugador } from '../servicios/jugadores-AndresOspina.service';

@Component({
  selector: 'app-james',
  templateUrl: './james.component.html'
  })
export class JamesComponent implements OnInit {
  jugadores:Jugador[]=[];
  james:Jugador[] = [{Nombre: "", Bio: "", Img:"", Nacimiento:"", Seleccion:"", Equipo:""}]

  constructor(private _jugadoresAndresOspinaService:JugadoresAndresOspinaService) {
  }
  

  ngOnInit(): void {
    this.jugadores = this._jugadoresAndresOspinaService.getJugadores();
    console.log(this.james)
    
    for(let james of this.jugadores){
      if(james.Nombre == "James Rodriguez"){
        this.james = [{
          Nombre: james.Nombre,
          Bio: james.Bio,
          Equipo: james.Equipo,
          Img: james.Img,
          Nacimiento: james.Nacimiento,
          Seleccion: james.Seleccion
        }]
        console.log(this.james)
      }
    }
  }
}

