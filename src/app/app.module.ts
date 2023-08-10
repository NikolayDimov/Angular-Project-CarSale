import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';


// Services
import { AuthService } from "./shared/services/auth.service";
import { CrudService } from './shared/services/crud.service';
import { DataSharedService } from './shared/services/sharedObj.service';
import { DataService } from './shared/services/user.service';

import { CoreModule } from './core/core.module';
import { ComponentsModule } from './components/components.module';

// Import below modules for NGX Toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { BtnHighlightDirective } from './shared/directives/btn-highlight.directive';



// Search module


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule, 
    CoreModule, 
    ComponentsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,  // Include it in imports array
    HttpClientModule,
  ],
  providers: [AuthService, CrudService, DataService, DataSharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
