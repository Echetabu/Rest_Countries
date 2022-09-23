import { Component, OnInit } from '@angular/core';

const regions = ["Africa", "America", "Asia","Europe","Oceania"]

@Component({
  selector: 'app-home-filter',
  templateUrl: './home-filter.component.html',
  styleUrls: ['./home-filter.component.scss']
})
export class HomeFilterComponent implements OnInit {
  regions: string[] = regions;
  isOpen : boolean = false;
  selectedText : string = "Filter by region";

  openMenu(){
  this.isOpen = !this.isOpen;
  }

  selected(region :string){
    this.isOpen = !this.isOpen;
    this.selectedText = region
  }
  constructor() { }
  

  ngOnInit(): void {
  }

}
