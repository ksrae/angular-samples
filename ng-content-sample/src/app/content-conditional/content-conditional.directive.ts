import { Directive, TemplateRef } from "@angular/core";

@Directive({
  selector: '[contentConditional]'
})
export class ContentConditionalDirective {
  constructor(public templateRef: TemplateRef<unknown>) {}
}
