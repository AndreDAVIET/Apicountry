import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  countries;
  countryDetail;

  constructor(private apiservice : ApiService) { }

  ngOnInit(): void {
    this.apiservice.getAllCountry().subscribe(
      result => this.countries = result
    )
  }

  onCountrySelected(country){
    this.countryDetail = country;
  }


}
