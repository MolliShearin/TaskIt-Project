import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TableComponent } from './table-view/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TableViewComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
