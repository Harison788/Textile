import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { OrderListComponent } from './components/order-list/order-list';
import { OrderDetail } from './components/order-detail/order-detail';
import { OrderForm } from './components/order-form/order-form';
import { QualityControl } from './components/quality-control/quality-control';
import { Delivery } from './components/delivery/delivery';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'orders', component: OrderListComponent },
  { path: 'orders/new', component: OrderForm },
  { path: 'orders/:id', component: OrderDetail },
  { path: 'quality-control', component: QualityControl },
  { path: 'delivery', component: Delivery },
  { path: '**', redirectTo: 'dashboard' }
];