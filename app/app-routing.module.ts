import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { OrderParentComponent } from './components/order-parent/order-parent.component';
const routes: Routes = [
  //default path:
  {path: '', redirectTo: '/Product',pathMatch:'full' },

{path:'order', component: OrderParentComponent},


{path:'About us', component: HomeComponent

},
{path:'contact us', component: HomeComponent

},
{path:'Product', component: ProductComponent },
{path:'Order', component: OrderParentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
