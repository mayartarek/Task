import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/service/data.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-charts',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  exportAs: 'app-pie-charts',
  templateUrl: './pie-charts.component.html',
  styleUrls: ['./pie-charts.component.scss'],
})
export class PieChartsComponent {
  filePath = '../../../assets/json/course.json';
  courses: any[] = [];
  subs: Subscription[] = [];
  public pieChartData: any[] = [];

  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.loadFile();
  }
  loadFile() {
    this.subs.push(
      this.dataService.get(this.filePath).subscribe((res) => {
        this.courses = res;
        this.mapData();
      })
    );
  }
  mapData() {
    this.pieChartData = this.courses.map((course) => ({
      name: course.courseName,
      value: course.registeredStudents,
    }));
    console.log(this.pieChartData);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subs.forEach((e) => e.unsubscribe);
  }
}
