import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  offres = [
    {
      id: 1,
      titre: 'Titre de l\'offre 1',
      description: 'Description de l\'offre 1...'
    },
    {
      id: 2,
      titre: 'Titre de l\'offre 2',
      description: 'Description de l\'offre 2...'
    },
  ];
}
