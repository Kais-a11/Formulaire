import { Component, OnInit } from '@angular/core';
import { Tache } from '../model/tache.model';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  taches!: Tache [] ;

constructor(private tacheService:TacheService)
{
  this.taches = tacheService.listeTache();

}

  ngOnInit(): void {
  }

  idToDelete:number=0;
  supprimerTache(id: number): void {
    this.tacheService.supprimerTache(this.idToDelete);
  }
}
