import { Component } from '@angular/core';
import {RouterModule} from "@angular/router";
import {LibButtonComponent} from "../../../../projects/library/src/lib/elements/lib-button/lib-button.component";

@Component({
  selector: 'app-library',
  standalone: true,
  imports: [RouterModule, LibButtonComponent],
  templateUrl: './library.component.html',
  styleUrl: './library.component.scss'
})
export class LibraryComponent {}
