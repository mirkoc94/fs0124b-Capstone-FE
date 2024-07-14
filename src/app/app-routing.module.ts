import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages-main/home/home.module').then(m => m.HomeModule),
    title: 'Beauty&Co'
  },
  {
    path: 'shop',
    loadChildren: () => import('./pages/pages-main/shop/shop.module').then(m => m.ShopModule),
    title: 'Beauty&Co | Shop'
  },
  {
    path: 'order/:id',
    loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule),
    title: 'Beauty&Co | Ordine',
    //canActivate: [AuthGuard]
  },
  {
    path: 'orders-admin',
    loadChildren: () => import('./pages/pages-admin/orders-admin/orders-admin.module').then(m => m.OrdersAdminModule),
    title: 'Beauty&Co',
    //canActivate: [AdminGuard]
  },
  {
    path: 'user/:id',
    loadChildren: () => import('./pages/pages-user/user/user.module').then(m => m.UserModule),
    title: 'Beauty&Co | Profilo',
    //canActivate: [AuthGuard]
  },
  {
    path: 'users-admin',
    loadChildren: () => import('./pages/pages-admin/users-admin/users-admin.module').then(m => m.UsersAdminModule),
    title: 'Beauty&Co',
    //canActivate: [AdminGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    title: 'Beauty&Co | Login'
  },
  {
    path: 'create',
    loadChildren: () => import('./backoffice/create/create.module').then(m => m.CreateModule),
    title: 'Beauty&Co',
    //canActivate: [AdminGuard]
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./backoffice/edit/edit.module').then(m => m.EditModule),
    title: 'Beauty&Co',
    //canActivate: [AdminGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/pages-user/cart/cart.module').then(m => m.CartModule),
    title: 'Beauty&Co | Carrello',
    //canActivate: [AuthGuard]
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/pages-user/payment/payment.module').then(m => m.PaymentModule),
    title: 'Beauty&Co | Pagamento',
    //canActivate: [AuthGuard]
  },
  {
    path: 'confirmation',
    loadChildren: () => import('./pages/pages-user/confirmation/confirmation.module').then(m => m.ConfirmationModule),
    title: 'Beauty&Co',
    //canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
