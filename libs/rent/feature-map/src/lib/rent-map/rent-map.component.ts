import { Component, OnInit } from '@angular/core';
import { RentApiService } from '../../../../data-access/src/lib/rent-api.service';

@Component({
  selector: 'gdanx-rent-map',
  templateUrl: './rent-map.component.html',
  styleUrls: ['./rent-map.component.scss']
})
export class RentMapComponent implements OnInit {
  constructor(private rentApi: RentApiService) {}

  ngOnInit() {
    this.rentApi.getData();
  }
}
