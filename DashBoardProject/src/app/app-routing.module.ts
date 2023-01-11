import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatsComponent } from './chats/chats.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { TablesComponent } from './tables/tables.component';
import { WidgetComponent } from './widget/widget.component';


const routes: Routes = [
  {
    path:'',component:DashboardComponent,pathMatch:'full'
  },
  {
path:'dashboard',component:DashboardComponent
  },
  {
    path:'widget',component:WidgetComponent
  },
  {
    path:'chats',component:ChatsComponent
  },
  {
    path:'tables',component:TablesComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
   path:'forms',component:FormsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
