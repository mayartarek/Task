import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserFormComponent } from '../user-form/user-form.component';
import { PieChartsComponent } from '../pie-charts/pie-charts.component';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [NgbModule, UserFormComponent, PieChartsComponent],
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss'],
})
export class MainComponentComponent implements OnInit {
  constructor() {}
  active = 1;

  ngOnInit(): void {}
}
