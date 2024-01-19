import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeTableComponent } from './prime-table/prime-table.component';
import { PrimeGridComponent } from './prime-grid/prime-grid.component';
import { TableModule } from 'primeng/table';
import { CurrencyPipe } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { InplaceModule } from 'primeng/inplace';
import { TagModule } from 'primeng/tag';
import { ScrollerModule } from 'primeng/scroller';
@NgModule({
  declarations: [AppComponent, PrimeGridComponent, PrimeTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    MenubarModule,
    TabMenuModule,
    TableModule,
    CurrencyPipe,
    SkeletonModule,
    InplaceModule,
    TagModule,
    ScrollerModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
