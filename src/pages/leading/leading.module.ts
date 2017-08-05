import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeadingPage } from './leading';

@NgModule({
  declarations: [
    LeadingPage,
  ],
  imports: [
    IonicPageModule.forChild(LeadingPage),
  ],
})
export class LeadingPageModule {}
