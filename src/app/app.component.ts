import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('btn2') btn2!: ElementRef;
  title = 'app-test-cod';

  constructor(private readonly render: Renderer2) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log('btn2 setT', this.btn2)
    console.log('btn2 setT', this.btn2.nativeElement)
    this.render.listen(this.btn2.nativeElement, 'click', () => this.eventClickFromController());
    // console.log('btn2 setT', this.btn2)
  }

  eventClickFromTemplate(): void {
    console.log('Hola me llaman desde el template :]');
  }
  
  eventClickFromController(): void {
    console.log('Hola me llaman desde el controller :]');
  }

}
