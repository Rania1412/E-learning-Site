import { Component, OnInit } from '@angular/core';
import { EtudiantsService } from '../etudiants.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  table:any=[];
  constructor(private etudiantsService :EtudiantsService)  {
   }

  ngOnInit(): void {
    this.getEtud();
  }
  getEtud(){
    this.table=this.etudiantsService.etudiantsTable;
    console.log(this.table);
  }
  modify(){
    
  }
  delete(){

  }

}
