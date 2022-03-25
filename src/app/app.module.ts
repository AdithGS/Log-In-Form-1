import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SortTableComponent } from './sort-table/sort-table.component';
import { SortDirective } from './directive/sort.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from  '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    TodoComponent,
    ReactiveFormComponent,
    LandingPageComponent,
    SortTableComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
