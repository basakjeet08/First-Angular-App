import { Component, ViewChild } from '@angular/core';
import { ViewChildComponent } from './view-child/view-child.component';

@Component({
  selector: 'app-template-view-child-diff',
  templateUrl: './template-view-child-diff.component.html',
  styleUrls: ['./template-view-child-diff.component.css'],
})
export class TemplateViewChildDiffComponent {
  // Reference to the child component from the parent
  @ViewChild(ViewChildComponent) childComponent!: ViewChildComponent;
  childData = '';

  // This function runs the getDataFromHere function inside the Child Component
  getChildData() {
    this.childData = this.childComponent.getDataFromHere();
  }
}
