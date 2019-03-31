import { Component, OnInit } from '@angular/core';
import { PaymentsApiService } from '../../../../data-access/src/lib/payments-api.service';

@Component({
  selector: 'gdanx-payments-main',
  templateUrl: './payments-main.component.html',
  styleUrls: ['./payments-main.component.scss']
})
export class PaymentsMainComponent implements OnInit {
  constructor(private paymentsApi: PaymentsApiService) {}

  ngOnInit() {
    this.paymentsApi.getData();
  }
}
