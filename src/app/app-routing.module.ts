import { NotfoundComponent } from './notfound/notfound.component';
import { NasaComponent } from './nasa/nasa.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nasa', component: NasaComponent },
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
