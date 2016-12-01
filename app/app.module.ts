// --- Modules ---
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JsonpModule } from '@angular/http';


// --- Components ---
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather-widget/component/weather.component';
import { SpeedUnitPipe } from './weather-widget/pipe/speed-unit.pipe';
import { TempUnitPipe } from './weather-widget/pipe/temp-unit.pipe';

@NgModule({
    imports: [ BrowserModule, JsonpModule ],
    declarations: [ AppComponent, WeatherComponent, SpeedUnitPipe, TempUnitPipe ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }