import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appDragDrop]",
})
export class DragDropDirective {
  @Input() dragData: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("dragstart", ["$event"])
  onDragStart(event: any) {
    event.dataTransfer.setData("text", JSON.stringify(this.dragData));
    this.renderer.addClass(this.el.nativeElement, "dragging");
  }

  @HostListener("dragend", ["$event"])
  onDragEnd(event: any) {
    this.renderer.removeClass(this.el.nativeElement, "dragging");
  }

  @HostListener("dragover", ["$event"])
  onDragOver(event: any) {
    event.preventDefault();
    this.renderer.addClass(this.el.nativeElement, "drag-over");
  }

  @HostListener("dragleave", ["$event"])
  onDragLeave(event: any) {
    event.preventDefault();
    this.renderer.removeClass(this.el.nativeElement, "drag-over");
  }

  @HostListener("drop", ["$event"])
  onDrop(event: any) {
    event.preventDefault();
    this.renderer.removeClass(this.el.nativeElement, "drag-over");
    const data = JSON.parse(event.dataTransfer.getData("text"));
    // Handle the drop event and access the data that was dropped.
  }
}
