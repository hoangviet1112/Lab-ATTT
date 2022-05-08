import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabCarComponent } from './fab-car/fab-car.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'fab-car',
    component: FabCarComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
