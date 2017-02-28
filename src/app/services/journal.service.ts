import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions, URLSearchParams,Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {WSConfig} from "../models/wsconfig";
import {Journals} from "../models/journals";
import {Journal} from "../models/journal";

@Injectable()
export class JournalService {

  apiConfig:WSConfig = new WSConfig();
  journalURL:string = "";
  allJournals:Journals = new Journals(); // allJournals.journalItems

  constructor(private httpService:Http) {
    this.initAPIConfig();

  }

  /* Should return a promise  */
  getJournals(): any{
    console.log("***** start: getJournals() *****");
    console.log(this.allJournals);

    let getRequest = this.httpService.get(this.journalURL);
    console.log(getRequest);

    let requestAsPromise = getRequest.toPromise();

    let theWholePromise = requestAsPromise.then(this.extractJournalEntries).catch(this.processError); // theWholePromise is a "ZoneAwarePromise"
    console.log("***** end: getJournals() *****");
    return theWholePromise;
  }

  /* Should return a promise such as Promise<Journal>  */
  postJournal(parameters:string):any{
    console.log("***** adding journal *****");
    let postURL = `${this.journalURL}params=${parameters}`;
    console.log(postURL);
    let postSubmission = this.httpService.post(postURL,parameters,{headers:this.apiConfig.headers});
    let postSubmissionAsPromise = postSubmission.toPromise();
    let submissionResponse = (result) => result.json().data;
    let whatToDoWhenPromiseIsReturned = postSubmissionAsPromise.then(submissionResponse);
    let theWholePromise = whatToDoWhenPromiseIsReturned.catch(this.processError);
    return theWholePromise;
  }



  private extractJournalEntries(response:any):any{
    console.log("**** start extractJournalEntries ****");
    console.log("response is: \n");
    console.log(response);
    let responseAsJson = response.json();

    // comparison function - compares to model
    let compareKeysFunction:Function = (a,b) => {
      console.log(" **** comparing keys ****");
      let aKeys = Object.keys(a).sort();
      let bKeys = Object.keys(b).sort();
      let doTheyMatch = JSON.stringify(aKeys).toLowerCase() === JSON.stringify(bKeys).toLowerCase();
      console.log(`Comparing keys / props returns ${doTheyMatch}`);
      return doTheyMatch;
    };

    // this.addMatchingJournals(responseAsJson,compareKeysFunction);
    // **********
    console.log("***** comparing and adding matching entries *****");
    console.log("response as JSON");
    console.log(responseAsJson);

    let potentialJournal:Journal;
    let modelKeyToCompare = new Journal();
    let tempJournalList:Journals = new Journals();

    for (let prop in responseAsJson){
      potentialJournal = <Journal>responseAsJson[prop];
      if(compareKeysFunction(potentialJournal,modelKeyToCompare)){
        tempJournalList.journalItems.push(potentialJournal);
      }
      // end if
    }
    // end loop and function
    // **********


    console.log("**** end extractJournalEntries ****");
    return tempJournalList;

    // end extractJournalEntries;
  }

  addMatchingJournals(responseAsJson:any,comparisonFn:any):void {
    console.log("***** comparing and adding matching entries *****");
    console.log("response as JSON");
    console.log(responseAsJson);
    console.log(comparisonFn);
    let potentialJournal:Journal;
    let modelKeyToCompare = new Journal();
    for (let prop in responseAsJson){
      potentialJournal = <Journal>responseAsJson[prop];
      if(comparisonFn(potentialJournal,modelKeyToCompare)){
        this.allJournals.journalItems.push(potentialJournal);
      }
      // end if
    }
    // end loop and function
  }

  private processError(error:any):Promise<any>{
    console.log("***** (service) AN ERROR OCCURRED *****");
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  initAPIConfig():void{
    this.apiConfig.headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'});
    this.apiConfig.baseAPIKey = `94a08da1fecbb6e8b46990538c7b50b2`;
    this.apiConfig.baseJournalURL = `http://portal.helloitscody.com/inhabitent/api/get/${this.apiConfig.baseAPIKey}/?`;
    this.apiConfig.baseJournalParams = `params=[{"name":"posts_per_page","value":"5"},{"name":"paged","value":"1"}]`;

    this.journalURL = this.apiConfig.baseJournalURL + encodeURI(this.apiConfig.baseJournalParams)    ;

  }

}
