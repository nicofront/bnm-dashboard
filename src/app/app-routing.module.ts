import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationComponent } from 'src/pages/verification/verification.component';
import { VerificationTimeoutComponent } from 'src/pages/verification-timeout/verification-timeout.component';
import { VerificationModalComponent } from 'src/pages/verification-modal/verification-modal.component';

const routes: Routes = [
  { path: '', redirectTo: 'verification', pathMatch: 'full' },
  { path: 'verification', component: VerificationComponent },
  { path: 'verification-modal', component: VerificationModalComponent },
  { path: 'verification-timeout', component: VerificationTimeoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
