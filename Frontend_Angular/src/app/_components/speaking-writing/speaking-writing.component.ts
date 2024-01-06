import { Component } from '@angular/core';
import { SectionService } from '../../_services/section.service';

@Component({
  selector: 'app-speaking-writing',
  templateUrl: './speaking-writing.component.html',
  styleUrls: ['./speaking-writing.component.css']
})
export class SpeakingWritingComponent {
  constructor(
    private sectionService: SectionService
  ) { }

  ngOnInit(): void {
    this.fetchSpeakingSection();
    this.fetchWritingSection();
  }
  
  sections: any[] = []; // Khai báo mảng sections
  speakingSections: any[] = []; // Khai báo mảng phần nói
  writingSections: any[] = []; // Khai báo mảng phần viết

  fetchSpeakingSection(): void {
    this.sectionService.getAllEnableSectionsByType(3).subscribe({
      next: data => {
        this.speakingSections = data;
        console.log(data);
      },
      error: err => {
        this.handleError(err);
      }
    });
  }

  fetchWritingSection(): void {
    this.sectionService.getAllEnableSectionsByType(4).subscribe({
      next: data => {
        this.writingSections = data;
        console.log(data);
      },
      error: err => {
        this.handleError(err);
      }
    });
  }

  content?: string;
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
