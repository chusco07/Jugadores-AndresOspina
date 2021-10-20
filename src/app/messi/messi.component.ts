import { Component, OnInit } from '@angular/core';
import { JugadoresAndresOspinaService, Jugador } from '../servicios/jugadores-AndresOspina.service';

@Component({
  selector: 'app-messi',
  templateUrl: './messi.component.html'
  })
export class MessiComponent implements OnInit {
  jugadores:Jugador[]=[];
  messi:Jugador[] = [{Nombre: "", Bio: "", Img:"", Nacimiento:"", Seleccion:"", Equipo:""}]

  constructor(private _jugadoresAndresOspinaService:JugadoresAndresOspinaService) {
  }

  ngOnInit(): void {
    this.jugadores = this._jugadoresAndresOspinaService.getJugadores();
    console.log(this.messi)
    
    for(let messi of this.jugadores){
      if(messi.Nombre == "Leonel Messi"){
        this.messi = [{
          Nombre: messi.Nombre,
          Bio: messi.Bio,
          Equipo: messi.Equipo,
          Img: messi.Img,
          Nacimiento: messi.Nacimiento,
          Seleccion: messi.Seleccion
        }]
        console.log(this.messi)
      }
    }
  }
}


