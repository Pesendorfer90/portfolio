import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-content/header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { ArrowComponent } from './main-content/arrow/arrow.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { Arrow2Component } from './main-content/arrow2/arrow2.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { Arrow3Component } from './main-content/arrow3/arrow3.component';
import { ContactComponent } from './main-content/contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    ArrowComponent,
    MySkillsComponent,
    Arrow2Component,
    PortfolioComponent,
    Arrow3Component,
    MainContentComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FooterComponent,
    ContactComponent,
    NavbarComponent,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
