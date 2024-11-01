import {AfterViewInit, Component, ElementRef, Input, Renderer2} from '@angular/core';
import {NgIf} from "@angular/common";
import {VcButtonStyle, VcElementSize, VcElementType} from "../../models/common-ui.types";

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './lib-button.component.html',
  styleUrls: ['./lib-button.component.scss'], // исправлено на styleUrls
  host: {
    '[class.primary]': 'buttonType === "primary"',
    '[class.danger]': 'buttonType === "danger"',
    '[class.success]': 'buttonType === "success"',
    '[class.secondary]': 'buttonType === "secondary"',

    '[class.solid]': 'buttonStyle === "solid"',
    '[class.outline]': 'buttonStyle === "outline"',
    '[class.plain]': 'buttonStyle === "plain"',
    '[class.unit]': 'buttonStyle === "unit"',

    '[class.small]': 'buttonSize === "small"',
    '[class.medium]': 'buttonSize === "medium"',
    '[class.large]': 'buttonSize === "large"',
    '[class.huge]': 'buttonSize === "huge"',
    '[class.block]': 'block',
  }
})
export class LibButtonComponent implements AfterViewInit {
  element: HTMLButtonElement;

  constructor(private readonly elementRef: ElementRef, private renderer: Renderer2) {
    this.element = this.elementRef.nativeElement as HTMLButtonElement;
  }
  @Input() buttonType!: VcElementType;
  @Input() buttonSize!: VcElementSize;
  @Input() buttonStyle!: VcButtonStyle;
  @Input() disabled!: boolean;
  @Input() block!: boolean;
  @Input() loading = false;

  ngAfterViewInit() {
    this.renderer.listen(this.element.querySelector('button'), 'click', () => this.element.querySelector('button')?.blur());
  }
}
