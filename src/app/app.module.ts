import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//AQUI SE IMPORTAN LOS URL
import { APP_ROUTING } from './app.routes';

//AQUI IMPORTAMOS LOS SERVICIOS
import { JugadoresAndresOspinaService } from './servicios/jugadores-AndresOspina.service';

//AUI SON LOS COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadoresComponent } from './jugadores/jugadores.component';
import { FooterComponent } from './footer/footer.component';
import { RonaldoComponent } from './ronaldo/ronaldo.component';
import { HeaderComponent } from './header/header.component';
import { JamesComponent } from './james/james.component';
import { MessiComponent } from './messi/messi.component';


@NgModule({
  declarations: [
    AppComponent,
    JugadoresComponent,
    FooterComponent,
    RonaldoComponent,
    HeaderComponent,
    JamesComponent,
    MessiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
  ],
  providers: [JugadoresAndresOspinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
