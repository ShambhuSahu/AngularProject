import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PopularComponent } from './popular/popular.component';
import { RecentactivityComponent } from './recentactivity/recentactivity.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabComponent } from './tab/tab.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'sidenav',component:SidenavComponent},
  {path:'main',component:MainComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'widgets',component:WidgetsComponent},
  {path:'recentactivity',component:RecentactivityComponent},
  {path:'tab',component:TabComponent},
  {path:'popular',component:PopularComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
