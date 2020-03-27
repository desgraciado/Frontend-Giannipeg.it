import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  template: `
  <p-progressBar
    [value]="progress">
  </p-progressBar>`,
  styles: [`
    :host ::ng-deep .ui-progressbar-label {
       color: black;
    }
    :host ::ng-deep .ui-progressbar-value {
       background: lightblue;
    }
  `]
})
export class ProgressComponent implements OnInit {
  @Input() progress;
  constructor() { }

  ngOnInit(): void {
  }

}
