import { Component, OnInit } from '@angular/core';
import { JugadoresAndresOspinaService, Jugador } from '../servicios/jugadores-AndresOspina.service';

@Component({
  selector: 'app-ronaldo',
  templateUrl: './ronaldo.component.html'
  })
export class RonaldoComponent implements OnInit {
  jugadores:Jugador[]=[];
  ronaldo:Jugador[] = [{Nombre: "", Bio: "", Img:"", Nacimiento:"", Seleccion:"", Equipo:""}]
  
  constructor(private _jugadoresAndresOspinaService:JugadoresAndresOspinaService) {
  }
  
  ngOnInit(): void {
    this.jugadores = this._jugadoresAndresOspinaService.getJugadores();
    console.log(this.ronaldo)
    
    for(let ronaldo of this.jugadores){
      if(ronaldo.Nombre == "Cristiano Ronaldo"){
        this.ronaldo = [{
          Nombre: ronaldo.Nombre,
          Bio: ronaldo.Bio,
          Equipo: ronaldo.Equipo,
          Img: ronaldo.Img,
          Nacimiento: ronaldo.Nacimiento,
          Seleccion: ronaldo.Seleccion
        }]
        console.log(ronaldo)
      }
    }
  }
}
