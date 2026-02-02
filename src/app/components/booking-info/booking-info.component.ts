import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingInfo } from '../../models/booking-info.model';

@Component({
  selector: 'app-booking-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-info.component.html',
  styleUrls: ['./booking-info.component.css']
})
export class BookingInfoComponent {
  @Input() bookingInfo!: BookingInfo;
}
