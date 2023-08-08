import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HomeComponent } from 'src/pages/home/home.component';
// import { FooterComponent } from 'src/pages/pfooter/pfooter.component';
// import { AseguradosComponent } from 'src/pages/asegurados/asegurados.component';
import { VerificationComponent } from 'src/pages/verification/verification.component';
import { VerificationTimeoutComponent } from 'src/pages/verification-timeout/verification-timeout.component';
import { VerificationModalComponent } from 'src/pages/verification-modal/verification-modal.component';
// import { ProvidersComponent } from 'src/pages/providers/providers.component';

const routes: Routes = [
  { path: '', redirectTo: 'verification', pathMatch: 'full' },
  { path: 'home', component: VerificationComponent },
  { path: 'verification', component: VerificationComponent },
  { path: 'verification-modal', component: VerificationModalComponent },
  { path: 'verification-timeout', component: VerificationTimeoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
