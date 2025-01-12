import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { LivrecrudService } from '../livrecrud.service';
import { Livre } from '../livre/livre.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-ajoutlivre',
   imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './ajoutlivre.component.html',
  styleUrl: './ajoutlivre.component.css'
})
export class AjoutlivreComponent {
   livreForm: FormGroup;
    
  
    constructor(private fb: FormBuilder, private livreService:LivrecrudService) {
      
      this.livreForm = this.fb.group({
        id:livreService.livres.length,
        titre: ['', Validators.required],
        auteur: ['', Validators.required],
        annee:['',Validators.required]
      });
      
    }
  
    ngOnInit(): void {
       
    }
  
    onSubmit(): void {
      if (this.livreForm.valid) {
        const livreInfo: Livre = this.livreForm.value;
        
       
          
          this.livreService.ajouterLivre(livreInfo);
        console.log(this.livreService.livres);
        
        this.livreForm.reset();
      }
    }
}
