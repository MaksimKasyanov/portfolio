import { Component, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import hljs from 'highlight.js';

@Component({
  selector: 'structure-main',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './structure-main.component.html',
  styleUrls: ['./structure-main.component.scss']
})
export class StructureMainComponent implements AfterViewInit {

  codeSnippet: string = `import { Component } from '@angular/core';
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
`;

  ngAfterViewInit() {
    // Проверяем, доступен ли объект document
    if (typeof document !== 'undefined') {
      const blocks = document.querySelectorAll('pre code');
      blocks.forEach((block) => {
        hljs.highlightElement(block as HTMLElement);
      });
    }
  }
}
