import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule}  from '@angular/http';
import {RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { MusiclyricComponent } from './components/musiclyric/musiclyric.component';
import {FormsModule} from '@angular/forms';

import { DataService}  from './services/data.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {EmptyResponse} from './empty.pipe';

import { FooterComponent } from './components/footer/footer.component';

const routes: Routes=[
  {path:'', component:SearchComponent},
  {path:'musiclyric/:id', component:MusiclyricComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    MusiclyricComponent,
    SpinnerComponent,
    EmptyResponse,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
