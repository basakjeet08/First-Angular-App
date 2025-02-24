import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css'],
})
export class RoutesComponent implements OnInit, OnDestroy {
  // Values for the HTML Template and subscriptions
  isUserLogged: boolean = false;
  private loggedSubscription!: Subscription;

  // Injecting the required services
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  // Initializing the default values and subscribing to the user logged status changes
  ngOnInit(): void {
    this.isUserLogged = this.authService.isUserLogged();

    // Subscribing to changes
    this.loggedSubscription = this.authService.loggedEventEmitter.subscribe(
      (isLogged: boolean) => (this.isUserLogged = isLogged)
    );
  }

  // This function logs in the user
  onLoginClick = () => this.authService.onAuthenticate();

  // This function is a utility function for navigation
  navigateTo(path: string) {
    this.router.navigate([path], { relativeTo: this.route });
  }

  // Below are the navigations for the button clicks
  onDashboardClick = () => this.navigateTo('dashboard');
  onOtherClick = () => this.navigateTo('other');

  // Unsubscribing to the data subscriptions
  ngOnDestroy(): void {
    this.loggedSubscription.unsubscribe();
  }
}
