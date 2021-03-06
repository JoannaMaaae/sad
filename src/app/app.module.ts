import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AuthGuard} from './_guard/auth.guard';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminUIComponent } from './admin/admin-ui/admin-ui.component';
import { UserUIComponent } from './user/user-ui/user-ui.component';
import { FooterComponent } from './footer/footer.component';
import { AdminAccntComponent } from './admin-accnt/admin-accnt.component';
import { AdminHeaderComponent } from './admin-accnt/admin-header/admin-header.component';
import { AdminContentComponent } from './admin-accnt/admin-sidenav/admin-content/admin-content.component';
import { AdminSidenavComponent } from './admin-accnt/admin-sidenav/admin-sidenav.component';
import { BookDetailComponent } from './admin/book-detail/book-detail.component';
import { BookListComponent } from './admin/book-list/book-list.component';

import { EventEmitterService } from './event-emitter.service';
import { HttpClientModule} from '@angular/common/http';
import { DataService } from './data.service';
import { RouterModule } from '@angular/router';
import { EditFormComponent } from './edit-form/edit-form.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AdminUIComponent,
    UserUIComponent,
    FooterComponent,
    AdminAccntComponent,
    AdminHeaderComponent,
    AdminContentComponent,
    AdminSidenavComponent,
    BookDetailComponent,
    BookListComponent,
    EditFormComponent,

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    EventEmitterService,
    DataService,
    UserComponent,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
