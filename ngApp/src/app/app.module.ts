import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { StreetartsComponent } from './streetarts/streetarts.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { StreetartsService } from './streetarts.service';
import { NewStreetartComponent } from './new-streetart/new-streetart.component';
import { UpdateStreetartComponent } from './update-streetart/update-streetart.component';
import { MyStreetartsComponent } from './my-streetart/my-streetart.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    StreetartsComponent,
    NewStreetartComponent,
    UpdateStreetartComponent,
    MyStreetartsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, StreetartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
