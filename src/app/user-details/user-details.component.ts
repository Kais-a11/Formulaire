import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  @Input() users: any[] = [];
  @Output() deleteEvent = new EventEmitter<number>();
  @Output() editEvent = new EventEmitter<number>(); // Événement pour l'édition

  onDelete(index: number) {
    this.deleteEvent.emit(index);
  }

  onEdit(index: number) {
    this.editEvent.emit(index); // Émet l'événement d'édition avec l'index de l'utilisateur
  }
}
