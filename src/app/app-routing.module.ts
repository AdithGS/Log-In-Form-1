import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AuthguardGuard } from './helper/authguard.guard';
import { SortTableComponent } from './sort-table/sort-table.component';


const route:Routes =[

  {path:'',redirectTo:"/reactive-form",pathMatch:"full"},
  {path:'page',component:LoginpageComponent, canActivate: [AuthguardGuard],
    children:[
    
  
      {path:'sort-table',component:SortTableComponent},
    ],
   
  },
  {path:'reactive-form',component:ReactiveFormComponent},
  {path:'to-do',component:TodoComponent},
  {path:'log-inpage',component:LoginpageComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
