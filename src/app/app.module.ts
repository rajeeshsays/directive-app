import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { SampleComponent } from './sample/sample.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    SampleComponent,
    FirstcomponentComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
