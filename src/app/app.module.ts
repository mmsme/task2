import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import { HttpClient, HttpClientModule  } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TextDirectionController } from './common/TextDirectionController';
import { HeaderComponent } from './Components/header/header.component';
import { ProductCardComponent } from './Components/ProductCard/ProductCard.component';
import { HomeComponent } from './Pages/Home/Home.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageService } from './Services/Language/Language.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  }),
    AppRoutingModule
  ],
  providers: [LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}