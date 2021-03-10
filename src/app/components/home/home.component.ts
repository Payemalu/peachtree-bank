import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { TransactionsService, Transaction } from '../../servicios/transactions.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  transactions:Transaction[] = [];

  constructor( private _transactionsService:TransactionsService,
                private router:Router,
              )
{
  console.log("constructor");
}

  ngOnInit() {
    this.transactions = this._transactionsService.getTransactions();
    // console.log( this.transactions );
  }

  verTransaction( idx:number ){
    this.router.navigate( ['/home',idx] );
  }


}
