import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminUIComponent } from './admin/admin-ui/admin-ui.component';
import { UserUIComponent } from './user/user-ui/user-ui.component';

const routes: Routes = [
  {path: 'login', component: AdminComponent},
  {path: '', component: UserComponent},
  {path: 'admin', component: AdminUIComponent},
  {path: 'result', component: UserUIComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
