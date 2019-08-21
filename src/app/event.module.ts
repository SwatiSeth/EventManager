import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventTileComponent } from './event-tile/event-tile.component';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    EventComponent,
    EventTileComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    EventRoutingModule
  ],
  providers: [],
  bootstrap: [EventComponent]
})
export class EventModule { }
