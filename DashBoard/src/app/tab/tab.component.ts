import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit {

  constructor() { }

  populars=[
    {
    'image':'/assets/popular/property-6.jpeg',
    'name':'Property & sidebar agent',
    'rating':'$113,859 $6705/sqft',
    'deals':'Check in detail'
    },
    {
      'image':'/assets/popular/property-7.jpeg',
      'name':'Property & sidebar agent',
      'rating':'$113,859 $6705/sqft',
      'deals':'Check in detail'
      },
      {
        'image':'/assets/popular/property-4.jpeg',
        'name':'Property & sidebar agent',
        'rating':'$113,859 $6705/sqft',
        'deals':'Check in detail'
        },
  ]

  ngOnInit(): void {
  }



}
