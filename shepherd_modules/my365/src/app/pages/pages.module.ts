import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SETTINGS_ROUTES} from './pages.routes';
import {CalendarComponent} from '../calendar/calendar.component';
import {OptionsComponent} from '../options/options.component';
import {NotificationsComponent} from '../notifications/notifications.component';
import {LearningComponent} from '../learning/learning.component';
import {EmployeeRequestsComponent} from '../employee-requests/employee-requests.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SETTINGS_ROUTES)
  ],
  declarations: [
    EmployeeRequestsComponent,
    LearningComponent,
    NotificationsComponent,
    OptionsComponent,
    CalendarComponent,
  ]
})
export class PagesModule {
}
