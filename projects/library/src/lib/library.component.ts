import { Component } from '@angular/core';
import {LibButtonComponent} from "./elements/lib-button/lib-button.component";

@Component({
  selector: 'lib-library',
  standalone: true,
  imports: [LibButtonComponent],
  template: `
    <p>library works!</p>
  `,
  styles: ``
})
export class LibraryComponent {

}
