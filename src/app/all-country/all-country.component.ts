import { Component } from '@angular/core';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css']
})
export class AllCountryComponent {
  // ข้อมูลประเทศสำหรับแนะนำ
  countries = [
    { name: 'Australia', region: 'Oceania' },
    { name: 'Brazil', region: 'South America' },
    { name: 'Canada', region: 'North America' },
    { name: 'Denmark', region: 'Europe' },
    { name: 'Egypt', region: 'Africa' },
    { name: 'France', region: 'Europe' },
    { name: 'Greece', region: 'Europe' },
    { name: 'India', region: 'Asia' },
    { name: 'Japan', region: 'Asia' },
    { name: 'Kenya', region: 'Africa' },
    { name: 'New Zealand', region: 'Oceania' },
    { name: 'Peru', region: 'South America' },
    { name: 'Thailand', region: 'Asia' },
    { name: 'United Kingdom', region: 'Europe' },
    { name: 'Vietnam', region: 'Asia' },
  ];

  // ค่าการค้นหา
  searchText: string = '';

  // ฟังก์ชันกรองประเทศตามการค้นหา
  get filteredCountries() {
    return this.countries.filter(country =>
      country.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
