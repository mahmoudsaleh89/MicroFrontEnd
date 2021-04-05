import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SETTINGS_ROUTES} from './pages.routes';
import {GeneralComponent} from './general/general.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {LearningComponent} from './learning/learning.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  declarations: [
    GeneralComponent,
    PermissionsComponent,
    LearningComponent
  ]
})
export class PagesModule {
}
