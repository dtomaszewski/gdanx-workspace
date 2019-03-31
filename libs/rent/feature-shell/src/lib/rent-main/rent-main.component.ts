import { Component, OnInit } from '@angular/core';
import { RentApiService } from '../../../../data-access/src/lib/rent-api.service';

@Component({
  selector: 'gdanx-rent-main',
  templateUrl: './rent-main.component.html',
  styleUrls: ['./rent-main.component.scss']
})
export class RentMainComponent implements OnInit {
  constructor(private rentApi: RentApiService) {}

  ngOnInit() {
    this.rentApi.getData();
  }
}
