import {Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {EmployeeRequestsComponent} from '../employee-requests/employee-requests.component';
import {LearningComponent} from '../learning/learning.component';
import {NotificationsComponent} from '../notifications/notifications.component';
import {OptionsComponent} from '../options/options.component';
import {CalendarComponent} from '../calendar/calendar.component';

export const SETTINGS_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employee-requests',
    component: EmployeeRequestsComponent
  },
  {
    path: 'learning',
    component: LearningComponent
  },
  {
    path: 'notifications',
    component: NotificationsComponent
  },
  {
    path: 'options',
    component: OptionsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  }
];
