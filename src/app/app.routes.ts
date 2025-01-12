import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LivresComponent } from './livres/livres.component';
import { AjoutlivreComponent } from './ajoutlivre/ajoutlivre.component';
import { ModifierlivreComponent } from './modifierlivre/modifierlivre.component';

export const routes: Routes = [
    {path:'',component:AcceuilComponent},
    {path:'livres',component:LivresComponent},
    {path:'ajoutlivre',component:AjoutlivreComponent},
    {path:'modifierlivre/:id',component:ModifierlivreComponent}
];
