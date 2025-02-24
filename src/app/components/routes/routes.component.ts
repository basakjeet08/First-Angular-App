import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent implements OnInit {
  // Values for the HTML Template and subscriptions
  isUserLogged: boolean = false;

  // Injecting the required services
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Initializing the default values and subscribing to the user logged status changes
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();
  }

  // This function logs in the user
  toggleLogin() {
    this.authService.onAuthenticate().then((isUserLogged) => {
      this.isUserLogged = isUserLogged;

      if (this.isUserLogged) {
        this.navigateTo('dashboard');
      } else {
        this.navigateTo('/route');
      }
    });
  }

  // This function is a utility function for navigation
  navigateTo(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }

  // Below are the navigations for the button clicks
  onDashboardClick = () => this.navigateTo('dashboard');
  onOtherClick = () => this.navigateTo('other');
}
