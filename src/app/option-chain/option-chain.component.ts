import { Component, OnInit } from '@angular/core';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-option-chain',
  templateUrl: './option-chain.component.html',
  styleUrls: ['./option-chain.component.css']
})
export class OptionChainComponent implements OnInit {

  constructor() { }

  
  countries: any
  

  selectedCountry={ name: 'Australia', code: 'AU' };

  ngOnInit() {
      this.countries = [
          { name: 'Australia', code: 'AU' },
          { name: 'Brazil', code: 'BR' },
          { name: 'China', code: 'CN' },
          { name: 'Egypt', code: 'EG' },
          { name: 'France', code: 'FR' },
          { name: 'Germany', code: 'DE' },
          { name: 'India', code: 'IN' },
          { name: 'Japan', code: 'JP' },
          { name: 'Spain', code: 'ES' },
          { name: 'United States', code: 'US' }
      ];
  }
}
