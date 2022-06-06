import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './traceability/sign-up.component';

@NgModule({
  declarations: [		
    AppComponent,
      SignUpComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
