import {
  NgModule
} from '@angular/core';

import {
  CommonModule
} from '@angular/common';

import {
  SkyI18nModule
} from '@skyux/i18n';

import {
  SkyModalModule
} from '../modal/modal.module';

import {
  SkyModalsResourcesModule
} from '../shared/modals-resources.module';

import {
  SkyConfirmService
} from './confirm.service';

import {
  SkyConfirmComponent
} from './confirm.component';

@NgModule({
  declarations: [
    SkyConfirmComponent
  ],
  imports: [
    CommonModule,
    SkyI18nModule,
    SkyModalModule,
    SkyModalsResourcesModule
  ],
  exports: [
    SkyConfirmComponent
  ],
  providers: [
    SkyConfirmService
  ],
  entryComponents: [
    SkyConfirmComponent
  ]
})
export class SkyConfirmModule { }
