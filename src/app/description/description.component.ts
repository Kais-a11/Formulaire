import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  offre: any; // Type à adapter selon votre modèle de données d'offre d'emploi

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.offre = this.getOffreDetails(id);
    }
  }
  

  getOffreDetails(id: string) {
    return {
      id: 1,
      titre: 'Titre de l\'offre 1',
      description: 'Description détaillée de l\'offre 1...'
    };
  }
}