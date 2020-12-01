import { Component, OnInit } from '@angular/core';
import { AlertsService } from "./alerts.service";


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.sass']
})
export class AlertsComponent implements OnInit {

  message  = "aaaaaaa";
  visible;
  success;
  callback;


  ngOnInit(): void {

  }

  show(message, callback) {
    this.message = message;
    this.visible = true;
    this.success = false;
    this.callback = callback;
  }


  onCloseClick() {
    this.visible = false;
    this.success = false;
    this.callback();
  }

  onAcceptClick() {
    this.visible = false;
    this.success = true;
    this.callback();
  }

}
