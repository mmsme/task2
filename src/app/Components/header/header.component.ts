import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HostListener, Inject } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/Services/Language/Language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Output('langChanged') langChanged = new EventEmitter();
  isLangAr!:boolean; 
  scrolling:boolean = false;
  currentLang!:string;
  

  constructor(public translate:TranslateService, private langServ: LanguageService) { }

  ngOnInit() {
    this.currentLang = this.langServ.getCurrentLang() || 'en';
    this.currentLang == "ar"? this.isLangAr = true: this.isLangAr = false;
    this.translate.use(this.currentLang);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      console.log("apply Style");
      var nav = document.getElementById('myNav');
      nav?.classList.add('scrolled');
    }
  }

  changeLang(){
    if (this.isLangAr) {
      this.translate.use('en');
      this.langServ.changeCurrentLang('en');
      this.isLangAr = false;
    }else{
      this.translate.use('ar');
      this.langServ.changeCurrentLang('ar');
      this.isLangAr = true;      
    }

    this.langChanged.emit();
  }
}
