import { CanDeactivateFn } from '@angular/router';

// Interface which will be implemented by the component
export interface CanDashboardDeactivate {
  canDeactivate: () => boolean | Promise<boolean>;
}

// This is the CanDeactivateFn which will be added to the route file
export const dashboardDeactiveGuard: CanDeactivateFn<CanDashboardDeactivate> = (
  component
) => {
  return component.canDeactivate();
};
