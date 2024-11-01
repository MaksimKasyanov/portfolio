import { Component } from '@angular/core';
import {LibButtonComponent} from "../../../../../projects/library/src/lib/elements/lib-button/lib-button.component";

@Component({
  selector: 'app-elements',
  standalone: true,
  imports: [LibButtonComponent],
  templateUrl: './elements.component.html',
  styleUrl: './elements.component.scss'
})
export class ElementsComponent {

}
