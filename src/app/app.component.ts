import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('btn2') btn2!: ElementRef;
  title = 'app-test-cod';

  private readonly render = inject(Renderer2);

  @ViewChild('btn3') set setBtn2(btn: ElementRef) {
    // TODO: con el método set no se requiera de implementar el ngAfterViewInit.
    console.log('viewChild --> setBtn3 --> ', btn);
    this.render.setStyle(btn.nativeElement, 'margin', '15px');
    this.render.setStyle(btn.nativeElement, 'color', 'white');
    this.render.setStyle(btn.nativeElement, 'background', 'green');
    this.render.setStyle(btn.nativeElement, 'width', '120px');
    this.render.listen(btn.nativeElement, 'click', () => this.eventClickFromController(3));
  }

  // constructor(private readonly render: Renderer2) {}
  // private readonly render = inject(Renderer2);

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit --> ', this.btn2);
    this.render.listen(this.btn2.nativeElement, 'click', () => this.eventClickFromController(2));
  }

  eventClickFromTemplate(): void {
    console.log('Hola me llaman desde el template :]');
    alert('Hola me llaman desde el template :]');
  }
  
  eventClickFromController(id: number): void {
    console.log('Hola me llaman desde el controller :]', id);
    alert('Hola me llaman desde el controller :]' + id);
  }

}
