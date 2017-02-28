import {Headers} from "@angular/http";
export interface IWSConfig {

  baseAPIKey:string;
  baseJournalURL:string;
  baseJournalParams:string;

  headers:Headers;

}
