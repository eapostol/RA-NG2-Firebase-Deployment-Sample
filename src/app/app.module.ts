import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WindowObjectService } from './dom/window-object.service';
import { JournalViewComponent } from './views/journal-view/journal-view.component';
import {JournalService} from "./services/journal.service";

@NgModule({
  declarations: [
    AppComponent,
    JournalViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [WindowObjectService,JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
