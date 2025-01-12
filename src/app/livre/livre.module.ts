import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Livre} from './livre.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
})
export class LivreModule {

  public livre:Livre[]=[];
 }
