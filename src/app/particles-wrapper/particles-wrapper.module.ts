import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxParticlesModule } from '@tsparticles/angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxParticlesModule
  ],
  exports: [NgxParticlesModule]
})
export class ParticlesWrapperModule { }
