import { Component, OnInit } from '@angular/core';

import { Journal } from '../../models/journal';
import { JournalService } from '../../services/journal.service';
import {Journals} from "../../models/journals";


@Component({
  /* modeuleId: module.id */
  selector: 'app-journal-view',
  templateUrl: './journal-view.component.html',
  styleUrls: ['./journal-view.component.css'],
})
export class JournalViewComponent implements OnInit {

  allJournals:Journals = new Journals();

  constructor(private journalService:JournalService) {

    console.log("**** creating journal component **** ");
    console.log("**** created journal component **** ");
  }

  ngOnInit() {
    console.log("**** journal component ( start ngOnInit ) **** ");
    let myPromiseOfJournals:Promise<Journals> = this.journalService.getJournals();
    console.log(myPromiseOfJournals); // a ZoneAwarePromise
    myPromiseOfJournals.then( data => {
      this.allJournals=data;
      console.log(this.allJournals);
    }
    ).catch(this.onGetJournalError);

    console.log("**** journal component ( end ngOnInit ) **** ");
  }

  private onGetJournalError(error:any){
    console.log("***** (journal component) AN ERROR OCCURRED *****");
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
