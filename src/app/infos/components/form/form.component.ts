import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  countrySelected: string;

  filteredCountries: string[];

  @Output() countryChoice = new EventEmitter();
  @Input() countries;

  constructor() { }

  ngOnInit(): void {
  }

  change(newValue) {
    console.log(newValue);
    
    let arrayCountry = this.countries.filter(countries => countries.name.toLowerCase().includes(newValue.toLowerCase()));
    this.countryChoice.emit(arrayCountry);
  }

  search(event) {
    console.log(event.query);
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0){
        filtered.push(country.name);
      }
    }
    this.filteredCountries = filtered;
  }

}
