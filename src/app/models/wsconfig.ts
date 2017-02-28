import { IWSConfig } from './i-wsconfig';
import {Headers} from "@angular/http";
export class WSConfig implements IWSConfig {

  baseAPIKey:string = "";
  baseJournalURL:string = "";
  baseJournalParams:string  = "";

  headers:Headers = new Headers();
}
