import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddTacheComponent } from './add-tache/add-tache.component';
import { TacheComponent } from './tache/tache.component';
import { ContentComponent } from './content/content.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    UserDetailsComponent,
    AddTacheComponent,
    TacheComponent,
    ContentComponent,
    DescriptionComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
