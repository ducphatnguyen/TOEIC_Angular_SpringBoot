import { Component } from '@angular/core';
import { TopicService } from '../../_services/topic.service';
import { SectionService } from '../../_services/section.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  constructor(
    private topicService: TopicService
  ) { }

  ngOnInit(): void {
    this.fetchTopic();
  }
  
  content?: string;
  topics: any[] = [];

  fetchTopic(): void {
    this.topicService.getAllTopics().subscribe({
      next: data => {
        this.topics = data;
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
