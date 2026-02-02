import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TransfersComponent } from './app/pages/transfers/transfers.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TransfersComponent],
  template: `<app-transfers></app-transfers>`,
})
export class App {}

bootstrapApplication(App);
