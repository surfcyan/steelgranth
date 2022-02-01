import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MapService } from 'src/app/services/map.service';
declare var MapmyIndia: any; // Declaring Mapmyindia
declare var L: any; // Declaring

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Output() markerClick: EventEmitter<any> = new EventEmitter();
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  public map: any; // Initializing Map Variable
  constructor(private mapService: MapService) { }
  private token: any;

  ngOnInit(): void {
    // Creating Map
    this.map = new MapmyIndia.Map('map',
      {
        center: [20.5937, 78.9629],
        zoom: 5
      });
    // Get Access Token
    // this.mapService.getToken().then((data: any) => {
    //   this.token = data['access_token'];
    // });
    // Add Event Listner for Click Events
    this.map.on("click", (e: any) => this.handleClicks(e));
  }

  handleClicks(e: any) {
    // console.log('Normal Click')
    let mk = L.marker([e.latlng['lat'], e.latlng['lng']])
    this.map.addLayer(mk)
    mk.on("click", (e: any) => this.handleMarkerClick(e))
    this.onClick.emit({ map: this.map, event: e, mk });
  }

  handleMarkerClick(e: any) {
    // console.log('Marker Clicked');
    this.markerClick.emit({ map: this.map, event: e });
  }

}
