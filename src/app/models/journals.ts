import {IJournals} from './i-journals';
import {Journal} from "./journal";

export class Journals implements IJournals {

  // journalItems:Array<Journal> = new Array<Journal>();
  journalItems:Array<Journal> = new Array<Journal>() as Journal[];

  constructor(){
    // this.journalItems = <Journal[]>[];
  }

}
