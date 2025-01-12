import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Livre } from '../livre/livre.model';
import { LivrecrudService } from '../livrecrud.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-modifierlivre',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './modifierlivre.component.html',
  styleUrl: './modifierlivre.component.css'
})
export class ModifierlivreComponent {
  livreForm: FormGroup;
  @Input() livreamettreajour: Livre| null = null;

  constructor(private fb: FormBuilder, private livreService:LivrecrudService
    ,private route: ActivatedRoute, 
    private router: Router
  ) {
    this.livreForm = this.fb.group({
      id: [null],
      titre: ['', Validators.required],
      auteur: ['', Validators.required],
      annee:['',Validators.required]
    });
    const livreId = this.route.snapshot.paramMap.get('id');
    if (livreId !== null) {
      const livreIdN = +livreId;
      this.livreamettreajour=this.livreService.livres[livreIdN];
    }
  }

  ngOnInit(): void {
    if (this.livreamettreajour) {
      this.livreForm.patchValue(this.livreamettreajour); 
    }
  }

  onSubmit(): void {
    if (this.livreForm.valid) {
      const livreInfo: Livre = this.livreForm.value;
      if (this.livreamettreajour) {
        
        this.livreService.miseajourLivre(livreInfo);
      }
      
      this.livreForm.reset();
    }
  }
}
