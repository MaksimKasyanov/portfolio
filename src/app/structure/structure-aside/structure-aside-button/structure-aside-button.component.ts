import {AfterViewInit, Component, ElementRef, Renderer2} from '@angular/core';

@Component({
  selector: 'app-structure-aside-button',
  standalone: true,
  imports: [],
  templateUrl: './structure-aside-button.component.html',
  styleUrl: './structure-aside-button.component.scss'
})
export class StructureAsideButtonComponent implements AfterViewInit {
  element: HTMLButtonElement;

  constructor(private readonly elementRef: ElementRef, private renderer: Renderer2) {
    this.element = this.elementRef.nativeElement as HTMLButtonElement;
  }

  ngAfterViewInit() {
    this.renderer.listen(this.element.querySelector('button'), 'click', () => this.element.querySelector('button')?.blur());
  }
}
