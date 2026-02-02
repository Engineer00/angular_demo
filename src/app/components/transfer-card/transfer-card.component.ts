import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transfer } from '../../models/transfer.model';
import { BookingInfo } from '../../models/booking-info.model';

@Component({
  selector: 'app-transfer-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transfer-card.component.html',
  styleUrls: ['./transfer-card.component.css']
})
export class TransferCardComponent {
  @Input() transfer!: Transfer;
  @Input() isCompact: boolean = false;
  @Input() bookingInfo?: BookingInfo;
}
