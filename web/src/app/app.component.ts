import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: any[] = [];
  createTask(text: string) {
        return {
          id: this.tasks.length,
          text,
          completed: false,
        };
      }
    
      addTask(task: string) {
        const newTask = this.createTask(task);
        this.tasks.push(newTask);
    };
    
     completed(id: number) {
       const i = this.tasks.findIndex((t) => t.id === id);
        this.tasks[i].completed = !this.tasks[i].completed;
    };
    }

