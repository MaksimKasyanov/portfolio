import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LibButtonComponent } from '../../projects/library/src/lib/elements/lib-button/lib-button.component';
import { StructureHeaderComponent } from "./structure/structure-header/structure-header.component";
import { StructureAsideComponent } from "./structure/structure-aside/structure-aside.component";
import { StructureMainComponent } from "./structure/structure-main/structure-main.component";
import { HighlightModule } from "ngx-highlightjs";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    LibButtonComponent,
    StructureHeaderComponent,
    StructureAsideComponent,
    StructureMainComponent,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}
