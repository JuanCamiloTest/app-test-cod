import { Component, ElementRef, OnInit, Renderer2, inject } from '@angular/core';

@Component({
  selector: 'app-test-elementref',
  template: '',
  styleUrls: ['./test-elementref.component.css']
})
export class TestElementrefComponent implements OnInit {

  private readonly el = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    console.log('2-', this.el);
    // nota para mi concepto es mejor ejecutar el render en el afterViewInit()
    if (false) {
      const div = this.render.createElement('div');
      const p = this.render.createElement('p');
      const te = this.render.createText('Holaaaaaaaaa');

      this.render.setStyle(div, 'background-color', 'green');
      this.render.setStyle(div, 'width', '160px');
      this.render.setStyle(div, 'height', '460px');

      this.render.appendChild(p, te);
      this.render.appendChild(div, p);
      this.render.appendChild(this.el.nativeElement, div);
    } else {
      const div = this.render.createElement('button');
      const p = this.render.createElement('h2');
      const te = this.render.createText('Soy Button');

      this.render.setStyle(div, 'background-color', 'gray');
      this.render.setStyle(div, 'width', '160px');
      this.render.setStyle(div, 'height', '60px');
      this.render.setStyle(div, 'border', '20px');

      this.render.listen(div, 'click', (e: any) => alert('Holaa vengo del ts :]'));

      this.render.appendChild(p, te);
      this.render.appendChild(div, p);
      this.render.appendChild(this.el.nativeElement, div);
    }
  }

}
