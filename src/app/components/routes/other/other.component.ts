import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
})
export class OtherComponent implements OnInit {
  // These are the variables which are storing the params for Template file
  editParam = '';
  isAdminParam = '';
  fragmentData = '';

  // Injecting the route to take out the query and fragments
  constructor(private route: ActivatedRoute) {}

  // Fetching the query and fragment from the route
  ngOnInit(): void {
    this.editParam = this.route.snapshot.queryParams['editMode'];
    this.isAdminParam = this.route.snapshot.queryParams['isAdmin'];
    this.fragmentData = this.route.snapshot.fragment || '';
  }
}
