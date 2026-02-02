import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferCardComponent } from '../../components/transfer-card/transfer-card.component';
import { BookingInfoComponent } from '../../components/booking-info/booking-info.component';
import { MockDataService } from '../../services/mock-data.service';
import { Transfer } from '../../models/transfer.model';
import { BookingInfo } from '../../models/booking-info.model';

@Component({
  selector: 'app-transfers',
  standalone: true,
  imports: [CommonModule, TransferCardComponent, BookingInfoComponent],
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  mainTransfers: Transfer[] = [];
  sidebarTransfers: Transfer[] = [];
  bookingInfo!: BookingInfo;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.mainTransfers = this.mockDataService.getTransfers();
    this.sidebarTransfers = this.mockDataService.getSidebarTransfers();
    this.bookingInfo = this.mockDataService.getBookingInfo();
  }
}
