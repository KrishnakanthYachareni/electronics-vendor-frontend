import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  productInOrders: any = [];
  total = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.productInOrders = this.route.snapshot.paramMap.get('items')
    this.route.queryParams
      .subscribe(params => {
          this.productInOrders = JSON.parse(params.items);
          this.total = this.productInOrders.reduce(
            (prev, cur) => prev + cur.count * cur.productPrice, 0);
        }
      );
  }

  onSubmitTemplateBased() {
    alert("Your order has been successfully placed.")
    this.router.navigate(['order']);
  }
}
