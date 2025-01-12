import { Injectable } from '@angular/core';
import {Livre} from './livre/livre.model';
@Injectable({
  providedIn: 'root'
})
export class LivrecrudService {
  public livres:Livre[]=[];
  constructor() { 
    const livrestockes= localStorage.getItem('livres');
    if (livrestockes) {
        this.livres = JSON.parse(livrestockes);
    } else {
        this.livres = [];
    }

  }
  
  ajouterLivre(livre: Livre): void {
    
    this.livres.push(livre);
    localStorage.setItem('livres', JSON.stringify(this.livres));
  }

  
  listeLivre(): Livre[] {
    const livresstockes = localStorage.getItem('livres');
    if (livresstockes) {
      this.livres = JSON.parse(livresstockes);
    }
    return this.livres;
  }

  livrespecifique(indexlivre:number):Livre{
    const livresstockes = localStorage.getItem('livres');
    if (livresstockes) {
      this.livres = JSON.parse(livresstockes);
    }
    const livreenquestion = this.livres.findIndex(livre => livre.id === indexlivre);
    return this.livres[livreenquestion]
  }
  miseajourLivre(livremisajour: Livre): void {
    const livresstockes = localStorage.getItem('livres');
    if (livresstockes) {
      this.livres = JSON.parse(livresstockes);
    }
    const index = this.livres.findIndex(livre => livre.id === livremisajour.id);
    if (index !== -1) {
      this.livres[index] = livremisajour;
    }
    localStorage.setItem('livres', JSON.stringify(this.livres));
  }

  
  supprimerlivre(numerolivre: number): void {
    const livresstockes = localStorage.getItem('livres');
    if (livresstockes) {
      this.livres = JSON.parse(livresstockes);
    }
    this.livres = this.livres.filter(livre => livre.id !== numerolivre);
    localStorage.setItem('livres', JSON.stringify(this.livres));
  }
}
