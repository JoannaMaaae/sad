import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminUIComponent } from './admin/admin-ui/admin-ui.component';
import { UserUIComponent } from './user/user-ui/user-ui.component';
import { AdminAccntComponent } from './admin-accnt/admin-accnt.component';
import { AdminContentComponent } from './admin-accnt/admin-sidenav/admin-content/admin-content.component';
import { AdminHeaderComponent } from './admin-accnt/admin-header/admin-header.component';
import { AdminSidenavComponent } from './admin-accnt/admin-sidenav/admin-sidenav.component';
import { AuthGuard } from './_guard/auth.guard';
import { BookListComponent } from './admin/book-list/book-list.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { BookDetailComponent } from './admin/book-detail/book-detail.component';

const routes: Routes = [
  /*{ path: '',
  redirectTo: '',
    pathMatch: 'full',
  }, */

  { path: 'admin_accnt', canActivate: [AuthGuard], component: AdminAccntComponent},
  { path: 'admin_header', component: AdminHeaderComponent},
  { path: 'admin_sidenav', component: AdminSidenavComponent,
  children: [
    { path: 'admin_content', component: AdminContentComponent},
    { path: 'list', component: BookListComponent },
    { path: 'add', component: EditFormComponent },
  ]},
  {path: 'login', component: AdminComponent},
  {path: '', component: UserComponent},
  {path: 'admin', component: AdminUIComponent},
  {path: 'result', component: UserUIComponent},
  { path: 'addAuthor', component: EditFormComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
