import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TacheComponent } from './tache/tache.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { ContentComponent } from './content/content.component';
import { DescriptionComponent } from './description/description.component';

const routes: Routes = [
  {path:'inscription',component:InscriptionComponent},
  {path:'user_details', component:UserDetailsComponent},
  { path: 'tache', component:  TacheComponent},
  {path:'add_tache', component:AddTacheComponent},
  { path: '', component: ContentComponent },
  { path: 'description/:id', component: DescriptionComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
