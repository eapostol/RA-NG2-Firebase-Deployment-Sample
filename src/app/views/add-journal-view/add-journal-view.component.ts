import { Component, OnInit } from '@angular/core';

/* chance.js is a library (npm install --save chance) that generates random characters...neat! */
declare var chance:any;
import '../../../../node_modules/chance/chance.js';

@Component({
  selector: 'app-add-journal-view',
  templateUrl: './add-journal-view.component.html',
  styleUrls: ['./add-journal-view.component.css']
})
export class AddJournalViewComponent implements OnInit {

  constructor() {
    console.log("**** creating AddJournalViewComponent ****");
    console.log(chance.sentence({words:5}));
    console.log("**** created AddJournalViewComponent ****");
  }

  ngOnInit() {
    console.log("**** initializing AddJournalViewComponent ****");
    console.log("**** created AddJournalViewComponent ****");
  }

}
