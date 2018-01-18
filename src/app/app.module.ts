import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { CargaComponent } from './components/carga/carga.component';

import { APP_ROUTES } from './app.routes';
import { CargaImagenesService } from './services/carga-imagenes.service';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';


@NgModule({
  declarations: [
    AppComponent,
    FotosComponent,
    CargaComponent,
    NgDropFilesDirective
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule
  ],
  providers: [
    CargaImagenesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
