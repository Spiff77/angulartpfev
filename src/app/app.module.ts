import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ListElementComponent } from './list-element/list-element.component';
import { EnfantComponent } from './enfant/enfant.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ListElementComponent,
    EnfantComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
