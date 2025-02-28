import { Component } from '@angular/core';

@Component({
  selector: 'app-http-testing',
  templateUrl: './http-testing.component.html',
  styleUrls: ['./http-testing.component.css'],
})
export class HttpTestingComponent {
  // This is the dummy data for the Template
  dataList = [
    { id: '', title: 'Data 01', description: 'Data 02' },
    { id: '', title: 'Data 01', description: 'Data 02' },
    { id: '', title: 'Data 01', description: 'Data 02' },
    { id: '', title: 'Data 01', description: 'Data 02' },
    { id: '', title: 'Data 01', description: 'Data 02' },
    { id: '', title: 'Data 01', description: 'Data 02' },
    { id: '', title: 'Data 01', description: 'Data 02' },
  ];

  // This function is invoked when the user clicks on the delete button
  onDeleteClick(id: string) {
    console.log(id);
  }
}
