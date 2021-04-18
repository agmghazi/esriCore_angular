// you can use
// https://www.npmjs.com/package/@arcgis/core
// https://github.com/Esri/jsapi-resources/tree/master/esm-samples/jsapi-angular-cli

import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';

import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import esriConfig from '@arcgis/core/config.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  view: MapView;
  map: Map;
  title = 'ng-cli';

  constructor(private zone: NgZone) {}

  initializeMap(): Promise<any> {
    this.map = new Map({
      basemap: 'streets',
    });
    (window as any)._map = this.map;

    const view = new MapView({
      container: 'viewDiv',
      map: this.map,
      center: [39.632082471740105, 24.323293224399425],
      zoom: 10,
    });

    (window as any)._view = view;

    this.view = view;
    return this.view.when();
  }

  ngOnInit(): any {
    // Required: Set this property to insure assets resolve correctly.
    // IMPORTANT: the directory path may be different between your production app and your dev app
    esriConfig.assetsPath = './assets';

    this.zone.runOutsideAngular(() => {
      // Initialize MapView and return an instance of MapView
      this.initializeMap().then(() => {
        // The map has been initialized
        this.zone.run(() => {
          console.log('mapView ready: ');
        });
      });
    });
  }

  ngOnDestroy(): void {
    if (this.view) {
      // destroy the map view
      this.view.destroy();
    }
  }
}
