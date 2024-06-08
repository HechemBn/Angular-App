import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-gestion-produits';
  constructor(private router: Router) { }
  action: any;
  goToRoute(route: string) {
    this.router.navigate([route]);
  }
  actionCourante: any;
  setActionCourante(a: any) {
    this.actionCourante = a
  }
}
