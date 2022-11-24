import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFormComponent } from './ajouter-form/ajouter-form.component';
import { EtudiantComponent } from './etudiant/etudiant.component';

const routes: Routes = [
  {path: "etudiant", component:EtudiantComponent},
  {path:"ajout", component:AjouterFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

