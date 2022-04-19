import {LOCALE_ID, NgModule} from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "./header/components/header/header.component";
import {SidenavListComponent} from "./header/components/header/sidenav-list/sidenav-list.component";
import {TopNavComponent} from "./header/components/header/top-nav/top-nav.component";
import * as fr from "@angular/common/locales/fr";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavListComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
  ],
  exports : [
    HeaderComponent,
    SidenavListComponent,
    TopNavComponent
  ],
  // Un provider est un objet que l'on déclare à Angular pour qu'il puisse l'injecter à différentes endroits de l'application.
  providers: [
    {provide: LOCALE_ID, useValue: 'fr-FR'},
  ]
})
export class CoreModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
