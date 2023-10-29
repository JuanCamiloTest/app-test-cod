import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { TestService } from './services/test.service';
import { catchError, never } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('btn2') btn2!: ElementRef;
  title = 789;
  user = {};
  data = {};
  
  private readonly render = inject(Renderer2);
  private readonly el = inject(ElementRef);
  private readonly tS = inject(TestService);

  @ViewChild('btn3') set setBtn3(btn: ElementRef) {
    // TODO: con el método set no se requiera de implementar el ngAfterViewInit.
    // console.log('viewChild --> setBtn3 --> ', btn);
    this.render.setStyle(btn.nativeElement, 'margin', '15px');
    this.render.setStyle(btn.nativeElement, 'color', 'white');
    this.render.setStyle(btn.nativeElement, 'background', 'green');
    this.render.setStyle(btn.nativeElement, 'width', '120px');
    this.render.listen(btn.nativeElement, 'click', () => this.eventClickFromController(3));
  }

  // constructor(private readonly render: Renderer2) {}
  // private readonly render = inject(Renderer2);

  ngOnInit(): void {
    this.user = {name: 'Juan', age: 24, year: 2023};
    this.tS.request2Http().subscribe({
      next: res => this.responseGetHttp(res),
      error: err => console.log('errrrrrr ---->', err)
    });
    this.tS.request3Http().subscribe({
      next: res => this.responseGetHttp2(res),
      error: err => console.log('errrrrrr http 3 ---->', err)
    });
  }

  ngAfterViewInit(): void {
    // console.log('1-', this.el);
    this.render.listen(this.btn2.nativeElement, 'click', () => this.eventClickFromController(2));
    const parent = this.render.createElement('h3');
    const child = this.render.createText('Hola mundo');
    this.render.appendChild(parent, child);
    this.render.appendChild(this.el.nativeElement, parent);    
  }

  eventClickFromTemplate(variTemplate: any, variTemplate2: any): void {
    console.log('#test --> ', variTemplate);
    console.log('#test2 --> ', variTemplate2);
    alert('Hola me llaman desde el template :]');
  }
  
  eventClickFromController(id: number): void {
    alert('Hola me llaman desde el controller :]' + id);
  }

  responseGetHttp(res: object): void {
    console.log('res count ---> ', Object.keys(res).length);
    console.log('res ---> ', res);
    this.data = res;
    this.m(['cade', 46]);
    this.m([{}]);
    this.m({});
  }

  m(d: object): void {
    console.log('es un Array  --> ', Array.isArray(d));
    console.log('d  --> ', d);
  }

  responseGetHttp2(res: any): void {
    console.log('res 2 ---> ', res);
  }

}
