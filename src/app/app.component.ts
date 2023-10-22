import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { TestService } from './services/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('btn2') btn2!: ElementRef;
  title = 'app-test-cod';
  
  private readonly render = inject(Renderer2);
  private readonly el = inject(ElementRef);
  private readonly tS = inject(TestService);
  
  @ViewChild('app-root') set vista(vt: ElementRef) {
    console.log('-----------', vt, '-----------');
  };

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
    console.log('1-', this.el);
    this.render.listen(this.btn2.nativeElement, 'click', () => this.eventClickFromController(2));
    const parent = this.render.createElement('h3');
    const child = this.render.createText('Hola mundo');
    this.render.appendChild(parent, child);
    this.render.appendChild(this.el.nativeElement, parent);

    console.log("-------------------------------");
    this.tS.request1().subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
    
  }

  eventClickFromTemplate(): void {
    alert('Hola me llaman desde el template :]');
  }
  
  eventClickFromController(id: number): void {
    alert('Hola me llaman desde el controller :]' + id);
  }

}
