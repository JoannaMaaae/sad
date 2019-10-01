import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

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
import { EventEmitterService } from './event-emitter.service';

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
    AdminSidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    EventEmitterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
