import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdmfSharedComponent } from '../components/mdmf-shared.component';

@NgModule({
  imports: [CommonModule],
  exports: [MdmfSharedComponent],
  declarations: [MdmfSharedComponent],
  providers: [],
})
export class MdmfSharedModule  {
}
