import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Componentes
import { AppComponent } from './app.component';
import { NavbarOdmaComponent } from './components/navbar-odma/navbar-odma.component';
import { TareasOdmaComponent } from './components/tareas-odma/tareas-odma.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarOdmaComponent,
    TareasOdmaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
