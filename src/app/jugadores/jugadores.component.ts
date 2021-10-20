import { Component, OnInit } from '@angular/core';
import { JugadoresAndresOspinaService, Jugador } from '../servicios/jugadores-AndresOspina.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html'
  
})
export class JugadoresComponent implements OnInit {

  jugadores:Jugador[]=[];
  constructor(private _jugadoresAndresOspinaService:JugadoresAndresOspinaService) { }

  ngOnInit(): void {
    this.jugadores = this._jugadoresAndresOspinaService.getJugadores();
    console.log(this.jugadores);
  }

}
