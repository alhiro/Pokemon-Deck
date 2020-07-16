import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared';

import { DetailItemRoutingModule } from './detail-item-routing.module';
import { DetailItemComponent } from './detail-item.component';
import { EffectsModule } from '@ngrx/effects';
import { DetailEffects } from '@app/effects/detail.effect';

@NgModule({
  declarations: [DetailItemComponent],
  imports: [
    CommonModule, 
    TranslateModule, 
    IonicModule, 
    SharedModule,
    DetailItemRoutingModule
  ],
})
export class DetailItemModule {}
