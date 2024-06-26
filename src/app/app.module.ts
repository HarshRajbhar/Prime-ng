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
import { OtherCompoComponent } from './other-compo/other-compo.component';
import { FormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { SliderModule } from 'primeng/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TreeSelectModule } from 'primeng/treeselect';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TimelineModule } from 'primeng/timeline';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ProgressBarModule } from 'primeng/progressbar';
@NgModule({
  declarations: [
    AppComponent,
    PrimeGridComponent,
    PrimeTableComponent,
    OtherCompoComponent,
  ],
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
    SliderModule,
    FormsModule,
    AccordionModule,
    BrowserAnimationsModule,
    TreeSelectModule,
    OrganizationChartModule,
    TimelineModule,
    FieldsetModule,
    PanelModule,
    DialogModule,
    ProgressBarModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
