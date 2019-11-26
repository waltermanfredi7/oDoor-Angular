import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeScreenComponent } from './pages/welcomeScreen/welcomeScreen.component';
import { ButtonComponent } from './component/button/button.component';
import {FormsModule} from '@angular/forms';
import { LogoComponent } from './component/logo/logo.component';
import { DividerComponent } from './component/divider/divider.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    ButtonComponent,
    LogoComponent,
    DividerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
