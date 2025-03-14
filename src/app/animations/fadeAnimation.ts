import { animate, style, transition, trigger } from '@angular/animations';

// This is the global animation for fade enter and exit effect
export const fadeAnimation = trigger('fadeAnimation', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('1s ease-in', style({ opacity: 1 })),
  ]),
  transition(':leave', [animate('1s ease-out', style({ opacity: 0 }))]),
]);

// This is the global animation for slide in from left and slide out to right
export const leftSlideAnimation = trigger('leftSlideAnimation', [
  transition(':enter', [
    style({ transform: 'translateX(-200px)' }),
    animate('300ms ease-in', style({ transform: 'translateX(0)' })),
  ]),
  transition(':leave', [animate('300ms ease-out', style({ transform: 'translateX(200px)' }))]),
]);
