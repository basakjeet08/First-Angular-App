import { animate, style, transition, trigger } from '@angular/animations';

// This is the global animation for fade enter and exit effect
export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('1s ease-out', style({ opacity: 0 }))]),
]);
