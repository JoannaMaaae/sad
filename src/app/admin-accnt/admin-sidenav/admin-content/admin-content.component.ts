import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from '../../../../app/event-emitter.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.scss']
})
export class AdminContentComponent implements OnInit {

  constructor( private eventEmitterService: EventEmitterService) { }

  ngOnInit() {
  }

  AdminSidenavComponentFunction() {
    this.eventEmitterService.onAdminSidenavComponentButtonClick();
  }
}
