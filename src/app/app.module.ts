import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateTopoComponent } from './_template/template-topo/template-topo.component';
import { TemplateTopoFormComponent } from './_template/template-topo-form/template-topo-form.component';
import { TemplateHeaderComponent } from './_template/template-header/template-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateTopoComponent,
    TemplateTopoFormComponent,
    TemplateHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
