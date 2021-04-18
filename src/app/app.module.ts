import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewFeatureComponent } from './new-feature/new-feature.component';

@NgModule({
  declarations: [AppComponent, NewFeatureComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
