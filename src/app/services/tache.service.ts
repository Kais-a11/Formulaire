import { Injectable } from '@angular/core';
import { Tache } from '../model/tache.model';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  taches: Tache[] = []; 
  constructor() {
    this.taches = [
      { idTache: 1, nomTache: "Développeur React (front end)", dateCreation: new Date("2011-01-14") },
      { idTache: 2, nomTache: "Data Scientists", dateCreation: new Date("2011-01-14") },
      {idTache:3, nomTache:"Ingénieur en intelligence artificielle",dateCreation: new Date("2011-01-14")},

      
    ];
  }

  listeTache(): Tache[] {
    return this.taches;
  }

  ajouterProduit(tache: Tache) {
    this.taches.push(tache);
  }


  supprimerTache(id: number): void {
    this.taches = this.taches.filter(tache => tache.idTache !== id);
  }
}
