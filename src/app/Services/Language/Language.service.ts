import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

constructor() { }


getCurrentLang(){
  return localStorage.getItem("lang");
}

changeCurrentLang(_input: string){
  localStorage.setItem("lang", _input);
}

}
