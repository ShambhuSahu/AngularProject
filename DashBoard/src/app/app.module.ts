import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatBadgeModule} from '@angular/material/badge';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { ScrollCardComponent } from './scroll-card/scroll-card.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { RecentactivityComponent } from './recentactivity/recentactivity.component';
import { TabComponent } from './tab/tab.component';
import { PopularComponent } from './popular/popular.component';
import { ColorDirective } from './shared/color.directive';
import { CheckNumDirective } from './shared/check-num.directive';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    DashboardComponent,
    ScrollCardComponent,
    WidgetsComponent,
    RecentactivityComponent,
    TabComponent,
    PopularComponent,
    ColorDirective,
    CheckNumDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
