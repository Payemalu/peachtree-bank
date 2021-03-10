import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css']
})
export class TransactionCard implements OnInit {

  @Input() transaction: any = {};
  @Input() index: number;

  @Output() selectedTransaction: EventEmitter<number>;

  constructor(private router: Router) {
    this.selectedTransaction = new EventEmitter();
  }

  ngOnInit() {
  }

  verTransaction() {
    console.log(  this.index );
    this.router.navigate( ['/home', this.index] );
    this.selectedTransaction.emit( this.index );
  }

}
