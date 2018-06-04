import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraService } from './calculadora.service';
import { PostService } from './post.service';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { GlobalErrorHandlerService } from './global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    CalculadoraComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CalculadoraService,PostService,{ provide: HTTP_INTERCEPTORS, useClass: PostService, multi: true }
    ,{ provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
