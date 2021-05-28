import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
  // When Angular by default adds HTML tags to the elements and make them unique, and CSS style for example is only used in current component.
  // To stop it use None, by default is Emulated. Native is shadow DOM.
  encapsulation: ViewEncapsulation.Emulated, // None, Native
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement") element: { type: string; name: string; content: string };
  @Input() name: string;
  // ViewChild can be used in the same component to read data.
  @ViewChild("heading", { static: true }) header: ElementRef;
  // ContentChild can be used to read data from another component, it this case app.component.
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;

  constructor() {
    console.log("constructor called!");
  }

  // LiceCycle HOOKs below >>>>>>

  // ngOnChanges (runned before the other hooks) - Called after a bound input property changes, the only hook that receives parameters
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  // ngOnInit - Called onle one time once the component is initialized
  ngOnInit() {
    console.log("ngOnInit called!");
    console.log("Text Content: " + this.header.nativeElement.textContent);
    console.log(
      "Text Content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  // ngDoCheck - Called during every change detection run
  ngDoCheck() {
    console.log("ngDoCheck called!");
  }

  // ngAfterContentInit - Called after content has been projected into view (ng-content). Called once after content is projected to the ng-content.
  ngAfterContentInit() {
    console.log("ngAfterContentInit called!");
    console.log(
      "Text Content of paragraph: " + this.paragraph.nativeElement.textContent
    );
  }

  // ngAfterContentChecked - Called every time the projected content has been checked.
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }

  // ngAfterViewInit - Called after the components view has been initialized.
  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log("Text Content: " + this.header.nativeElement.textContent);
  }

  // ngAfterViewChecked - Called every time the view has been checked.
  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }

  // ngOnDestroy - Called once the component is about to be destroyed.
  ngOnDestroy() {
    console.log("ngOnDestroy called!");
  }
}
