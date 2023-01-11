import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recentactivity',
  templateUrl: './recentactivity.component.html',
  styleUrls: ['./recentactivity.component.scss']
})
export class RecentactivityComponent implements OnInit {

  constructor() { }

  content=[
    {
      'image':'/assets/recentactivity/nikki.jpg',
      'name':'Mila Alba left a 5 star review on Albama’s House',
      },
    {
    'image':'/assets/recentactivity/amay.jpg',
    'name':'Mila Alba left a 5 star review on Albama’s House',
    },
  
        {
          'image':'/assets/recentactivity/garry-sobars.jpg',
          'name':'Callback request from Bob Builder for the property Dimitri House',
          },
          {
            'image':'/assets/recentactivity/mathew.jpg',
            'name':'Congratulations to Tom Moody for joining 10+ club',
            },
            {
              'image':'/assets/noah-owens.jpg',
              'name':'Norman Dolphi is looking for a house in New Jersy, USA',
              },
              {
                'image':'/assets/ellen-manning.jpg',
                'name':'Agent Kily Johns has added 7 new photos to the property Albama’s House',
                },
                {
                  'image':'/assets/jones.jpg',
                  'name':'Welcome to a new agent Tom Moody in the Company'
                  },
                  {
                    'image':'/assets/selena.jpg',
                    'name':'Oliver Shorter is looking for an office space in Colorado, USA',
                    }
  ]

  ngOnInit(): void {
  }

}
