import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {


  title = 'custom';
  searchText;
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
    'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
    str = 'searchStr';

    names = [
      '8aJani',
      'Carl',
      'M8aargareth',
      'He8ge',
      'Jo8e',
      'J8austav',
      'B8irgit',
      '8aMary',
      '8Kai'
  ];

  // Convert Number to Words in English and Spanish

  constructor() { 
    //var require: any;
    // var writtenForm = require('written-number');
    // var wf = writtenForm(100000); 
    // console.log(wf);
    // writtenForm.defaults.lang = 'es';
    // var wf = writtenForm(28934355); 
    // console.log(wf);
  }

  

  
}
