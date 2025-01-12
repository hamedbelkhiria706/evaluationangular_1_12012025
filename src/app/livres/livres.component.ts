import { Component } from '@angular/core';
import { LivrecrudService } from '../livrecrud.service';

@Component({
  selector: 'app-livres',
  imports: [],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent {
 constructor(public ls:LivrecrudService){
  console.log(this.ls.livres);
 }
}
