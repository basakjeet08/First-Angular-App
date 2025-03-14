import { Component } from '@angular/core';
import {
  fadeAnimation,
  leftSlideAnimation,
} from 'src/app/animations/fadeAnimation';

@Component({
  selector: 'app-animation-testing',
  templateUrl: './animation-testing.component.html',
  styleUrls: ['./animation-testing.component.css'],
  animations: [fadeAnimation, leftSlideAnimation],
})
export class AnimationTestingComponent {
  // This variable dictates the component visibility
  isFadeVisible: boolean = false;
  isLeftSlideVisible : boolean = false;

  // This function is invoked when the button is clicked
  toggleFade() {
    this.isFadeVisible = !this.isFadeVisible;
  }

  // This function is invoked when the left slide animation button is clicked
  toggleLeftSlide(){
    this.isLeftSlideVisible = !this.isLeftSlideVisible;
  }
}
