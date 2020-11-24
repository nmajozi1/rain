import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrders } from './orders.interface';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, OnDestroy {

  id: number;
  public orders: IOrders[];
  private sub: any;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = + params['id'];
      this.fetchOrders();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  fetchOrders(): void {
    this.ordersService.getOrders(this.id).subscribe(res => {
      this.orders = res;
    });
  }

  back(): void {
    this.router.navigate(['users']);
  }

}
