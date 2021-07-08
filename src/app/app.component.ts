import { Component } from '@angular/core';
import { TextDirectionController } from './common/TextDirectionController';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trans-demo';
  public textDirection = new TextDirectionController();
}
