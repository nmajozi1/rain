import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes =
  [
    { path: '', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
    { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
    { path: 'users/:id/orders', loadChildren: () => import('./pages/orders/orders.module').then(m => m.OrdersModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
