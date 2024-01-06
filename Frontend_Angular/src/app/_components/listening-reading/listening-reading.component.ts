import { Component } from '@angular/core';
import { SectionService } from '../../_services/section.service';

@Component({
  selector: 'app-listening-reading',
  templateUrl: './listening-reading.component.html',
  styleUrls: ['./listening-reading.component.css']
})
export class ListeningReadingComponent {

  constructor(
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.fetchListeningSection();
    this.fetchReadingSection();
  }
  
  content?: string;
  listeningSections: any[] = []; // Khai báo mảng phần nghe
  readingSections: any[] = []; // Khai báo mảng phần đọc

  fetchListeningSection(): void {
    this.sectionService.getAllEnableSectionsByType(1).subscribe({
      next: data => {
        this.listeningSections = data;
        console.log(data);
      },
      error: err => {
        this.handleError(err);
      }
    });
  }

  fetchReadingSection(): void {
    this.sectionService.getAllEnableSectionsByType(2).subscribe({
      next: data => {
        this.readingSections = data;
        console.log(data);
      },
      error: err => {
        this.handleError(err);
      }
    });
  }

  private handleError(err: any): void {
    if (err.error) {
      try {
        const res = JSON.parse(err.error);
        this.content = res.message;
      } catch {
        this.content = `Error with status: ${err.status} - ${err.statusText}`;
      }
    } else {
      this.content = `Error with status: ${err.status}`;
    }
  }

}
