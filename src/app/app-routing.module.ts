import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/pages/home/home.component';
import { FooterComponent } from 'src/pages/pfooter/pfooter.component';
import { ProvidersComponent } from 'src/pages/providers/providers.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pfooter', component: FooterComponent },
  { path: 'providers', component: ProvidersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
