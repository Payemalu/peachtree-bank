
import { Injectable } from '@angular/core';

@Injectable()
export class TransactionsService {

    private transactions:Transaction[] = [
        {
            "categoryCode": "#12a580",
            "dates": {
                "valueDate": "1600493600000",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 5000,
                    "currencyCode": "EUR",
                },
                "type": "Salaries",
                "creditDebitIndicator": "CRDT",
            },
            "merchant": {
                "name": "Backbase",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/backbase.png",
        }, {
            "categoryCode": "#12a580",
            "dates": {
                "valueDate": "1600387200000",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 82.02,
                    "currencyCode": "EUR",
                },
            "type": "Card Payment",
            "creditDebitIndicator": "DBIT",
            },
            "merchant": {
            "name": "The Tea Lounge",
            "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/the-tea-lounge.png",
        }, {
            "categoryCode": "#d51271",
            "dates": {
                "valueDate": "2020-09-19",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 84.64,
                    "currencyCode": "EUR",
                },
                "type": "Card Payment",
                "creditDebitIndicator": "DBIT",
            },
            "merchant": {
                "name": "Texaco",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/texaco.png",
        }, {
            "categoryCode": "#12a580",
            "dates": {
                "valueDate": "1600300800000"
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 84.76,
                    "currencyCode": "EUR",
                },
                "type": "Card Payment",
                "creditDebitIndicator": "DBIT",
            },
            "merchant": {
                "name": "The Tea Lounge",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/the-tea-lounge.png",
        }, {
            "categoryCode": "#c12020",
            "dates": {
                "valueDate": "1600370800000",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 22.10,
                    "currencyCode": "EUR",
                },
                "type": "Online Transfer",
                "creditDebitIndicator": "DBIT",
            },
            "merchant": {
                "name": "Amazon Online Store",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/amazon-online-store.png",
        }, {
            "categoryCode": "#c89616",
            "dates": {
                "valueDate": "1600214400000",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 46.25,
                    "currencyCode": "EUR",
                },
                "type": "Card Payment",
                "creditDebitIndicator": "DBIT",
            },
            "merchant": {
                "name": "7-Eleven",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/7-eleven.png",
        }, {
            "categoryCode": "#e25a2c",
            "dates": {
                "valueDate": "1476721442000",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 19.72,
                    "currencyCode": "EUR",
                },
                "type": "Online Transfer",
                "creditDebitIndicator": "",
            },
            "merchant": {
                "name": "H&M Online Store",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/h&m-online-store.png",
        }, {
            "categoryCode": "#1180aa",
            "dates": {
                "valueDate": "2020-09-15"
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 68.87,
                    "currencyCode": "EUR"
                },
                "type": "Transaction",
                "creditDebitIndicator": "DBIT",
            },
            "merchant": {
                "name": "Jerry Hildreth",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/jerry-hildreth.png",
        }, {
            "categoryCode": "#1180aa",
            "dates": {
                "valueDate": "1600041600000"
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 52.36,
                    "currencyCode": "EUR"
                },
                "type": "Transaction",
                "creditDebitIndicator": "DBIT",
            },
            "merchant": {
                "name": "Lawrence Pearson",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/lawrence-pearson.png",
        }, {
            "categoryCode": "#12a580",
            "dates": {
                "valueDate": "1599955200000",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 75.93,
                    "currencyCode": "EUR"
                },
                "type": "Card Payment",
                "creditDebitIndicator": "DBIT"
            },
            "merchant": {
                "name": "Whole Foods",
                "accountNumber": "SI64397745065188826",
            },
            "img": "assets/img/icons/whole-foods.png",
        }, {
            "categoryCode": "#fbbb1b",
            "dates": {
                "valueDate": "1599868800000",
            },
            "transaction": {
                "amountCurrency": {
                    "amount": 142.95,
                    "currencyCode": "EUR",
                },
                "type": "Online Transfer",
                "creditDebitIndicator": "DBIT",
            },
            "merchant": {
                "name": "Southern Electric Company",
                "accountNumber": "SI64397745065188826"
            },
            "img": "assets/img/icons/southern-electric-company.png",
        },
    ];

    constructor() {
        console.log("Servicio listo para usar!!!");
    }

    getTransactions():Transaction[] {
        return this.transactions;
    }

    getTransaction( idx: string ) {
        return this.transactions[idx];
    }

    //   buscarTransactions( termino:string ):Transaction[]{

    //     let transactionsArr:Transaction[] = [];
    //     termino = termino.toLowerCase();

    //     for( let i = 0; i < this.transactions.length; i ++ ){

    //       let transaction = this.transactions[i];

    //       let nombre = transaction.nombre.toLowerCase();

    //       if( nombre.indexOf( termino ) >= 0  ){
    //         transaction.idx = i;
    //         transactionsArr.push( transaction )
    //       }

    //     }

    //     return transactionsArr;

    //   }


}


export interface Transaction{
    categoryCode: string;
    dates: {
        valueDate: string;
    }
    transaction: {
        amountCurrency: {
            amount: number,
            currencyCode: string,
        },
        type: string,
        creditDebitIndicator: string,
    }
    merchant: {
        name: string,
        accountNumber: string,
    }
    img: string;
    idx?: number;
};
