import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from 'src/pages/home/home.component';
// import { FooterComponent } from 'src/pages/pfooter/pfooter.component';
// import { AseguradosComponent } from 'src/pages/asegurados/asegurados.component';
import { SeguimientoComponent } from 'src/pages/seguimiento/seguimiento.component';
// import { ProvidersComponent } from 'src/pages/providers/providers.component';

const routes: Routes = [
  { path: '', redirectTo: 'seguimiento', pathMatch: 'full' },
  { path: 'home', component: SeguimientoComponent },
  { path: 'seguimiento', component: SeguimientoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
