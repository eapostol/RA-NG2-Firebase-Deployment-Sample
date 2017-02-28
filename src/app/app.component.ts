import { Component, ElementRef, AfterViewInit } from '@angular/core';

// reference window object (contains document)
import { WindowObjectService } from './dom/window-object.service';


// test jquery;
import * as $ from 'jquery';
import {document} from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[WindowObjectService]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';

  hasJQuery:Boolean = false;
  windowRef:any;

  constructor(private mainWindow:WindowObjectService){
    this.windowRef = mainWindow.nativeWindow;
    console.log(this.windowRef);
    this.init();
  }
  private init(){
    this.hasJQuery = this.checkJQuery();
    if(this.hasJQuery){
        this.onDocumentReady();
    }
  }

  private onDocumentReady(){
    $(document).ready(function(){
      console.log(`document loaded - ${document}`);

    })

  }

  ngAfterViewInit(){

  }

  private checkJQuery(){
    return ($.isFunction($));
  }
}
