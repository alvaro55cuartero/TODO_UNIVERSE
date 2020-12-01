import { Injectable } from '@angular/core';
import { NgElement, WithProperties } from '@angular/elements';
import { AlertsComponent } from "./alerts.component";

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  create(message: string) {
    var el = document.createElement('app-alerts');
    document.body.appendChild(el);

  }

  show(message: string) {
    const popupEl: NgElement & WithProperties<AlertsComponent> = document.createElement('app-alerts') as any;
    popupEl.addEventListener('closed', () => document.body.removeChild(popupEl));
    popupEl.message = message;
    document.body.appendChild(popupEl);
  }

}
