import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, TasksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title: string = "Todo's with Angular";

  toggleAddTask() {
    console.log('toggle');
  }
}
