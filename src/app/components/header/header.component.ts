import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
  // providers: [TodosService]
})
export class HeaderComponent {
  title = signal('my first signal');
  title2 = 'my non signal';
}
