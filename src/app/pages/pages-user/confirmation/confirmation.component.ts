import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit {

  transactionId = "";

  constructor(private payment: PaymentService) { }

  ngOnInit(): void {
    this.transactionId = this.payment.transactionID;
  }


}
