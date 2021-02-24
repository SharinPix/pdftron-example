import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import WebViewer from '@pdftron/webviewer'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  @ViewChild('viewer') viewer: ElementRef;
  constructor() {}

  ngAfterViewInit() {
    WebViewer({
      path: '../../wv-resources/lib',
      initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/PDFTRON_about.pdf'
    }, this.viewer.nativeElement).then((instance) => {
      // Call APIs here
    })
  }

}
