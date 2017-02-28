import { Injectable } from '@angular/core';

// TODO: eliminate TS2304 error
// see http://stackoverflow.com/questions/41336301/typescript-cannot-find-name-window-or-document
let _window:any = function(){
  return window;
};

@Injectable()
export class WindowObjectService {

  constructor() { }

  public get nativeWindow(): any {
    return _window();
  }


}
