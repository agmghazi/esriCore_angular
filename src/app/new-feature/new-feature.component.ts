import { Component, OnInit } from '@angular/core';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-new-feature',
  templateUrl: './new-feature.component.html',
  styleUrls: ['./new-feature.component.scss'],
})
export class NewFeatureComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}

  initializeFeature() {
    const featureLayer = new FeatureLayer({
      url:
        'https://sampleserver6.arcgisonline.com/arcgis/rest/services/Water_Network/FeatureServer/3',
    });
    this.appComponent.map.add(featureLayer);

    const mapImageLayer = new MapImageLayer({
      url:
        'http://192.168.8.101/arcgis/rest/services/SampleWorldCities/MapServer',
    });
    this.appComponent.map.add(mapImageLayer);
  }

  ngOnInit(): void {
    this.initializeFeature();
  }
}
