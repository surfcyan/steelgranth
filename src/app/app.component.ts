import { Component } from '@angular/core';

declare var L: any; // Declaring
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mktest(e: any) {
    console.log('Marker Clicked', e)
  }
  ctest(e: any) {
    console.log('Normal Click ', e)
    // e.map.removeLayer(e.mk)
  }

}
