import { Component, OnInit } from '@angular/core';
import { data } from '../../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  suggested_search_list = data;
  animateData: any;



  constructor() {
    
  }
  
  ngOnInit(): void {
      this.updateData();
  }

  updateData() {
    this.animateData = this.suggested_search_list?.top_search_categories
  }

  navigateUser(data: any){
    console.log(data)
  }


}
