import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './dev/cart/cart.component';
import { DevRequestComponent } from './dev/dev-request/dev-request.component';
import { InventoryRequestComponent } from './dev/inventory-request/inventory-request.component';
import { PastRequestsComponent } from './dev/past-requests/past-requests.component';
import { EmployeeListComponent } from './employee-admin/employee-list/employee-list.component';
import { EmployeeComponent } from './employee-admin/employee/employee.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { InventoryListComponent } from './infra-admin/inventory-list/inventory-list.component';
import { InventoryComponent } from './infra-admin/inventory/inventory.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ManagerRequestComponent } from './manager/manager-request/manager-request.component';
import { ManagerRespondedRequestComponent } from './manager/manager-responded-request/manager-responded-request.component';
import { PendingRequestsComponent } from './manager/pending-requests/pending-requests.component';
import { RespondedRequestsComponent } from './manager/responded-requests/responded-requests.component';
import { ProfileComponent } from './profile/profile.component';
import { RouteGuardService } from './service/route-guard.service';
import { DevRouteGuardService } from './service/routing/dev-route-guard.service';
import { EmpAdminRouteGuardService } from './service/routing/emp-admin-route-guard.service';
import { InfraAdminRouteGuardService } from './service/routing/infra-admin-route-guard.service';
import { ManagerRouteGuardService } from './service/routing/manager-route-guard.service';

const routes: Routes = [
  //common routes
  {path:'', component:HomeComponent},
  {path:'profile', component:ProfileComponent},
  {path:'login', component:LoginComponent},
  {path:'logout', component:LogoutComponent},
  //Dev routes
  {path:'inventory', component:InventoryRequestComponent, canActivate:[RouteGuardService, DevRouteGuardService]},
  {path:'past-requests', component:PastRequestsComponent, canActivate:[RouteGuardService, DevRouteGuardService]},
  {path:'past-request/:id', component:DevRequestComponent, canActivate:[RouteGuardService, DevRouteGuardService]},
  {path:'cart', component:CartComponent, canActivate:[RouteGuardService, DevRouteGuardService]},
  //Manager routes
  {path:'pending-requests', component:PendingRequestsComponent, canActivate:[RouteGuardService, ManagerRouteGuardService]},
  {path:'responded-requests', component:RespondedRequestsComponent, canActivate:[RouteGuardService, ManagerRouteGuardService]},
  {path:'pending-request/:id', component:ManagerRequestComponent, canActivate:[RouteGuardService, ManagerRouteGuardService]},
  {path:'responded-request/:id', component:ManagerRespondedRequestComponent, canActivate:[RouteGuardService, ManagerRouteGuardService]},
  //Employee Admin routes
  {path:'employees/:id', component:EmployeeComponent, canActivate:[RouteGuardService, EmpAdminRouteGuardService]},
  {path:'employees', component:EmployeeListComponent, canActivate:[RouteGuardService, EmpAdminRouteGuardService]},
  //Infra Admin routes
  {path:'inventories/:id', component:InventoryComponent, canActivate:[RouteGuardService, InfraAdminRouteGuardService]},
  {path:'inventories', component:InventoryListComponent, canActivate:[RouteGuardService, InfraAdminRouteGuardService]},
  {path:'**', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
