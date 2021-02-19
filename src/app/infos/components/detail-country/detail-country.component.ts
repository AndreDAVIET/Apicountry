import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-country',
  templateUrl: './detail-country.component.html',
  styleUrls: ['./detail-country.component.css']
})
export class DetailCountryComponent implements OnInit {

  @Input() CountryToDisplay

  constructor() { }

  ngOnInit(): void {
  }

  test(){
    console.log(this.CountryToDisplay)
  }

}
