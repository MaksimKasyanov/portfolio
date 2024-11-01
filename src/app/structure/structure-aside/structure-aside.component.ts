import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LibButtonComponent} from "../../../../projects/library/src/lib/elements/lib-button/lib-button.component";

@Component({
  selector: 'structure-aside',
  standalone: true,
  imports: [
    RouterLink,
    LibButtonComponent,
  ],
  templateUrl: './structure-aside.component.html',
  styleUrl: './structure-aside.component.scss'
})
export class StructureAsideComponent {

}
