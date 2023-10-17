import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ArrowComponent } from './arrow/arrow.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { Arrow2Component } from './arrow2/arrow2.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Arrow3Component } from './arrow3/arrow3.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutMeComponent,
    ArrowComponent,
    MySkillsComponent,
    Arrow2Component,
    PortfolioComponent,
    Arrow3Component,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
