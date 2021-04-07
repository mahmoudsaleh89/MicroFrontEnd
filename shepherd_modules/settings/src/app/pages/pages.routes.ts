import {Routes} from '@angular/router';
import {GeneralComponent} from './general/general.component';
import {PermissionsComponent} from './permissions/permissions.component';
import {LearningComponent} from './learning/learning.component';
import {HomeComponent} from '../home/home.component';

export const SETTINGS_ROUTES: Routes = [
  /*{
    path: '',
    component: HomeComponent
  },*/
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'permissions',
    component: PermissionsComponent
  },
  {
    path: 'learning',
    component: LearningComponent
  },
  {
    path: '**',
    redirectTo: 'general'
  }
];
