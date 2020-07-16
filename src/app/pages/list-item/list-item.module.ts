import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { SharedModule } from '@shared';

import { ListItemRoutingModule } from './list-item-routing.module';
import { ListItemComponent } from './list-item.component';
import { EffectsModule } from '@ngrx/effects';
import { ListsEffects } from '@app/effects/list.effect';

@NgModule({
  declarations: [ListItemComponent],
  imports: [
    CommonModule, 
    TranslateModule, 
    IonicModule, 
    SharedModule,
    ListItemRoutingModule
  ],
})
export class ListItemModule {}
