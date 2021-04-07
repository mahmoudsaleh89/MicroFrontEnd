import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {APP_ROUTES} from './app.routes';
import {ConfigComponent} from './config/config.component';

import {LayoutModule} from '@progress/kendo-angular-layout';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {MenusModule} from '@progress/kendo-angular-menu';
import {PopupModule} from '@progress/kendo-angular-popup';
import {IconsModule} from '@progress/kendo-angular-icons';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {NavigationModule} from '@progress/kendo-angular-navigation';
import {IndicatorsModule} from '@progress/kendo-angular-indicators';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule,
    LayoutModule,
    ButtonsModule,
    MenusModule,
    IndicatorsModule,
    IconsModule,
    InputsModule,
    NavigationModule,
    PopupModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConfigComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
