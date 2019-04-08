import { NgModule } from '@angular/core'; // I can use the ngModel of angular
import { Routes, RouterModule } from '@angular/router';

// I import all the componants I use with routes
import { StreetartsComponent } from './streetarts/streetarts.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewStreetartComponent } from './new-streetart/new-streetart.component';
import { MyStreetartsComponent } from './my-streetart/my-streetart.component';
import { UpdateStreetartComponent } from './update-streetart/update-streetart.component';

// I import the auth gard to block the routing to none connected users
import { AuthGuard } from './auth.guard';

// I set the routings of my app
const routes: Routes = [
  {
    // on the root of the app go to the Streetarts path
    path: '',
    redirectTo: '/streetarts',
    pathMatch: 'full'
  },
  {

    // on the Streetarts path get the Streetarts componant
    path: 'streetarts',
    component: StreetartsComponent,
  },
  {
    path: 'newStreetart',
    component: NewStreetartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'myStreetarts',
    component: MyStreetartsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'updateStreetart',
    component: UpdateStreetartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
