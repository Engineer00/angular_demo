import { Injectable } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { BookingInfo } from '../models/booking-info.model';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  getTransfers(): Transfer[] {
    return [
      {
        id: 1,
        title: 'Transfer la comun',
        vehicleImage: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=400',
        maxPersons: '7 pasageri',
        mediumLuggage: '7 bagaje',
        smallBaggage: '1 pasager',
        largeLuggage: '1 passatger',
        price: 250,
        estimatedTime: '90 min.',
        minPassengers: '4 pasageri'
      },
      {
        id: 2,
        title: 'Transfer la comun',
        vehicleImage: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=400',
        maxPersons: '7 pasageri',
        mediumLuggage: '7 bagaje',
        smallBaggage: '1 pasager',
        largeLuggage: '1 passatger',
        price: 250,
        estimatedTime: '90 min.',
        minPassengers: '4 pasageri'
      },
      {
        id: 3,
        title: 'Transfer la comun',
        vehicleImage: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=400',
        maxPersons: '7 pasageri',
        mediumLuggage: '7 bagaje',
        smallBaggage: '1 pasager',
        largeLuggage: '1 passatger',
        price: 250,
        estimatedTime: '90 min.',
        minPassengers: '4 pasageri'
      },
      {
        id: 4,
        title: 'Transfer la comun',
        vehicleImage: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=400',
        maxPersons: '7 pasageri',
        mediumLuggage: '7 bagaje',
        smallBaggage: '1 pasager',
        largeLuggage: '1 passatger',
        price: 250,
        estimatedTime: '90 min.',
        minPassengers: '4 pasageri'
      }
    ];
  }

  getBookingInfo(): BookingInfo {
    return {
      origin: 'Paris Charles de Gaulle (CDG) Airport',
      destination: 'Marriott Hotel Paris Rive Gauche, Paris',
      dateRange: '20 August 2025 - 24 August 2025',
      guests: '2 Adulti, 1 Copil (7 ani)'
    };
  }

  getSidebarTransfers(): Transfer[] {
    return [
      {
        id: 5,
        title: 'Transfer la comun',
        vehicleImage: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=400',
        maxPersons: '7 pasageri',
        mediumLuggage: '7 bagaje',
        smallBaggage: '1 pasager',
        largeLuggage: '1 passatger',
        price: 250,
        estimatedTime: '60 min.',
        minPassengers: '4 pasageri'
      },
      {
        id: 6,
        title: 'Transfer la comun',
        vehicleImage: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=400',
        maxPersons: '7 pasageri',
        mediumLuggage: '7 bagaje',
        smallBaggage: '1 pasager',
        largeLuggage: '1 passatger',
        price: 250,
        estimatedTime: '60 min.',
        minPassengers: '4 pasageri'
      },
      {
        id: 7,
        title: 'Transfer la comun',
        vehicleImage: 'https://images.pexels.com/photos/2676096/pexels-photo-2676096.jpeg?auto=compress&cs=tinysrgb&w=400',
        maxPersons: '7 pasageri',
        mediumLuggage: '7 bagaje',
        smallBaggage: '1 pasager',
        largeLuggage: '1 passatger',
        price: 250,
        estimatedTime: '60 min.',
        minPassengers: '4 pasageri'
      }
    ];
  }
}
