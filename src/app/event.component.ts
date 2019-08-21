import { Component } from '@angular/core';

@Component({
  selector: 'event-root',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  title = 'EventManager';
  eventList: any[] =  [{
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
    address: '1057 DT',
    city: 'London',
    country: 'England'
    }
    },
    {
      id: 2,
      name: 'Angular Connect 2',
      date: '9/26/2036',
      time: '10:00 am',
      price: 599.99,
      imageUrl: '/assets/images/angularconnect-shield.png',
      location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
      }
      }
  ]
}
