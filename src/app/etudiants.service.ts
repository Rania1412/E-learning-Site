import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EtudiantsService {
  etudiantsTable = [
    { id: 0, Nom: 'Trabelsi', Prenom: 'Ahmed', Classe: '3' },
    { id: 1, Nom: 'Kobbi ', Prenom: 'Rania', Classe: '4' },
  ];

  constructor() {}
}
