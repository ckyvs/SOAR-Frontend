import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { InventoryRequestComponent } from './dev/inventory-request/inventory-request.component';
import { PastRequestsComponent } from './dev/past-requests/past-requests.component';
import { RespondedRequestsComponent } from './manager/responded-requests/responded-requests.component';
import { PendingRequestsComponent } from './manager/pending-requests/pending-requests.component';
import { DevMenuComponent } from './dev/dev-menu/dev-menu.component';
import { ManagerMenuComponent } from './manager/manager-menu/manager-menu.component';
import { InfraAdminMenuComponent } from './infra-admin/infra-admin-menu/infra-admin-menu.component';
import { InventoryComponent } from './infra-admin/inventory/inventory.component';
import { InventoryListComponent } from './infra-admin/inventory-list/inventory-list.component';
import { EmpAdminMenuComponent } from './employee-admin/emp-admin-menu/emp-admin-menu.component';
import { EmployeeListComponent } from './employee-admin/employee-list/employee-list.component';
import { EmployeeComponent } from './employee-admin/employee/employee.component';
import { LogoutComponent } from './logout/logout.component';
import { CartComponent } from './dev/cart/cart.component';
import { HttpInterceptorJWTAuthService } from './service/http/http-interceptor-jwtauth.service';
import { ProfileComponent } from './profile/profile.component';
import { DevRequestComponent } from './dev/dev-request/dev-request.component';
import { ManagerRequestComponent } from './manager/manager-request/manager-request.component';
import { ManagerRespondedRequestComponent } from './manager/manager-responded-request/manager-responded-request.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    ErrorComponent,
    InventoryRequestComponent,
    PastRequestsComponent,
    RespondedRequestsComponent,
    PendingRequestsComponent,
    DevMenuComponent,
    ManagerMenuComponent,
    InfraAdminMenuComponent,
    InventoryComponent,
    InventoryListComponent,
    EmpAdminMenuComponent,
    EmployeeListComponent,
    EmployeeComponent,
    LogoutComponent,
    CartComponent,
    ProfileComponent,
    DevRequestComponent,
    ManagerRequestComponent,
    ManagerRespondedRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorJWTAuthService, multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
