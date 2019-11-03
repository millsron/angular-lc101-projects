import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'chores',
   templateUrl: './chores.component.html',
   styleUrls: ['./chores.component.css']
})
export class ChoresComponent implements OnInit {
   chores = [/*'Empty dishwasher',*/ 'Complete LaunchCode prep work', 'Buy groceries', 'Clean Bathroom'];
   todoTitles = ["Yesterday's Chores", "Today's Chores", "Tomorrow's Chores","Next Week's Chores"];

   constructor() { }

   ngOnInit() {
   }

}
