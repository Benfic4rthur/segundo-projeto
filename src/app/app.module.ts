import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonTestComponent } from './button-test/button-test.component';
import { ButtonTestColorsComponent } from './button-test-colors/button-test-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonTestComponent,
    ButtonTestColorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
