import { RouterModule, Routes } from '@angular/router';
import { JugadoresComponent } from "./jugadores/jugadores.component";
import { FooterComponent } from './footer/footer.component';
import { RonaldoComponent } from './ronaldo/ronaldo.component';
import { JamesComponent } from './james/james.component';
import { MessiComponent } from './messi/messi.component';

const APP_ROUTES: Routes = [
{path:'jugadores', component:JugadoresComponent},
{path:'Footer', component:FooterComponent},
{path:'Ronaldo', component:RonaldoComponent},
{path:'James', component:JamesComponent},
{path:'Messi',component:MessiComponent},
{path:'**', pathMatch:'full', redirectTo:'jugadores'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);