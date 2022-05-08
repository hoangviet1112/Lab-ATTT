import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FabCarComponent } from './fab-car/fab-car.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [		
    AppComponent,
      FabCarComponent,
      SignUpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
        ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
