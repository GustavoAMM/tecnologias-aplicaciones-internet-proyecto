import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'presentacion';
  constructor(private Hola: TestService) {}
   public ngOnInit() {
    this.Hola.test().subscribe(
      succes => {
        console.log(succes);
      },
      error => {console.log(error)}
    );
  }
}
