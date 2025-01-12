import { Component } from '@angular/core';
import { LivrecrudService } from '../livrecrud.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-livres',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent {
 constructor(public ls:LivrecrudService){
  console.log(this.ls.livres);
 }
}
