import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  @ViewChild('myform') myform!: NgForm; // Utilisation de ViewChild pour obtenir une référence au formulaire

  userDetailsArray: any[] = [];
  editedIndex: number | null = null; // Index de l'utilisateur en cours d'édition, initialement nul

  constructor(private router: Router) {}

  onDeleteUser(index: number) {
    this.userDetailsArray.splice(index, 1); 
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      const userDetails = form.value; 
      this.userDetailsArray.push(userDetails); 
      console.log("Les données du formulaire :", userDetails);
      this.clearForm();
    } else {
      console.log("Les données du formulaire ne sont pas correctes");
    }
  }

  onEditUser(index: number) {
    this.editedIndex = index; 
    const userDetails = this.userDetailsArray[index];
    this.myform.setValue({
      fullname: userDetails.fullname,
      email: userDetails.email,
      password: userDetails.password,
      confirmPassword: '' // Laissez la confirmation de mot de passe vide ou définissez la logique appropriée
    });
    
  }

  onSaveChanges() {
    if (this.editedIndex !== null && this.myform.valid) {
      const editedUserDetails = this.myform.value;
      this.userDetailsArray[this.editedIndex] = editedUserDetails;
      this.clearForm();
    } else {
      console.log("Veuillez remplir correctement le formulaire ou sélectionner un utilisateur à éditer.");
    }
  }
  
  clearForm() {
    this.editedIndex = null;
    this.myform.resetForm();
  }

  goToDetailUser()
  {
    this.router.navigate(['/user_detail']);
  }
}
