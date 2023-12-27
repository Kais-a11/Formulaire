import { Component } from '@angular/core';
import { Tache } from '../model/tache.model';
import { TacheService } from 'src/app/services/tache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tache',
  templateUrl: './add-tache.component.html',
  styleUrls: ['./add-tache.component.css']
})
export class AddTacheComponent {

  newTache = new Tache();
constructor(private tacheService: TacheService, private router:Router) { }
addTache(){
this.tacheService.ajouterProduit(this.newTache);
this.router.navigate(['/tache']);

}
}

