import { Injectable } from '@angular/core';
import { JugadoresComponent } from '../jugadores/jugadores.component';

@Injectable({
    providedIn: 'root'
})
export class JugadoresAndresOspinaService {

    private jugadores:Jugador[] = [
        {
          Nombre: "James Rodriguez",
          Bio: "futbolista colombiano, que juega como centrocampista y su equipo actual es Al Rayyan S. C. de la Qatar Stars League. Recibió en 2009, 2012 y 2014 el premio de jugador revelación de la Primera División de Argentina y en la Primeira Liga de Portugal.",
          Img: "assets/img/james.jpg",
          Nacimiento: "12 de julio de 1991",
          Seleccion: "Colombia",
          Equipo: "Everton",
        },
        {
          Nombre: "Cristiano Ronaldo",
          Bio: "futbolista portugués que juega como delantero en el Manchester United Football Club de la Premier League de Inglaterra y en la selección de Portugal, de la cual es su capitán y máximo goleador histórico.",
          Img: "assets/img/ronaldo.jpg",
          Nacimiento: "5 de febrero de 1985",
          Seleccion: "Portugal",
          Equipo: "Manchester UNITED",
        },
        {
          Nombre: "Leonel Messi",
          Bio: "futbolista argentino que juega como delantero o centrocampista en el Paris Saint-Germain de la Ligue 1 de Francia. Es internacional con la selección de Argentina, equipo del que es capitán y máximo goleador histórico.",
          Img: "assets/img/messi.jpg",
          Nacimiento: " 24 de junio de 1987",
          Seleccion: "Argentina",
          Equipo: "PSG",
        },
    ];

    constructor(){
        console.log("Servicio listo para usar!");
        }

        getJugadores():Jugador[]{
                        return this.jugadores;
                    }
}

export interface Jugador{
    Nombre: string;
    Bio: string;
    Img: string;
    Nacimiento: string;
    Seleccion: string;
    Equipo: string;
}