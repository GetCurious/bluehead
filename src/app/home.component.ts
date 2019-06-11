import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1 class="box has-text-centered has-background-warning">Workplace Kaizen</h1>
    <div class="has-background-white-ter">

      <h2 class="card-header-title">Host an Event</h2>
      <json-schema-form loadExternalAssets="true"
                        framework="bootstrap-4"
                        [schema]="schema"
                        [layout]="layout"
                        [(data)]="data"
                        (onSubmit)="submit($event)">
      </json-schema-form>
    </div>
  `
})

export class HomeComponent implements OnInit {

  // Form Schema
  schema = {
    type: 'object',
    properties: {
      organizer_name: {type: 'string'},
      event_title: {type: 'string'},

      has_fee: {type: 'boolean', title: '  Registration fee?'},

      registration_fee: {
        title: 'RM',
        type: 'integer'
      },


      event_location: {
        type: 'object',
        properties: {
          street_1: {type: 'string'},
          street_2: {type: 'string'},
          city: {type: 'string'},
          state: {
            type: 'string',
            'enum': ['KUL', 'LBN', 'PJY', 'JHR', 'KDH', 'KTN', 'MLK', 'NS',
              'PHG', 'PRK', 'PLS', 'PNG', 'SBH', 'SWK', 'SGR', 'TRG']
          },
          zip_code: {type: 'string'}
        }
      },
      date: {type: 'string', format: 'date'},
      time: {type: 'string'},
      event_details: {type: 'string'},
      phone_number: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            type: {type: 'string', 'enum': ['cell', 'home', 'work']},
            number: {type: 'string', pattern: '([0-9]{10,11})'}
          },
        }
      },
    },
    required: ['event_title', 'event_location', 'date', 'time'],
  };

  // UI Schema
  layout = [
    {
      type: 'flex', 'flex-flow': 'row wrap',
      items: [{key: 'organizer_name', placeholder: 'Name'},
        {key: 'event_title', placeholder: 'Event'}]
    },


    {key: 'has_fee',type:'checkbox'},
    {
      key: 'registration_fee',
      condition: 'model.has_fee',
      required: true
    },
    {
      key: 'registration_fee',
      condition: '!model.has_fee',
    },


    {key: 'event_location.street_1', title: 'Event Location', placeholder: 'Street'},
    {key: 'event_location.street_2', notitle: true},
    {
      type: 'div',
      display: 'flex',
      'flex-direction': 'row',
      items: [
        {
          key: 'event_location.city', flex: '3 3 150px',
          notitle: true, placeholder: 'City'
        },
        {
          key: 'event_location.state', flex: '1 1 50px',
          notitle: true, placeholder: 'State'
        },
        {
          key: 'event_location.zip_code', flex: '2 2 100px',
          notitle: true, placeholder: 'Zip Code'
        }
      ]
    },
    {key: 'date', type: 'date',},
    {key: 'time', type: 'time',},
    {
      key: 'phone_number',
      title: 'Contact',
      type: 'array',
      listItems: 1,
      items: [{
        type: 'div',
        displayFlex: true,
        'flex-direction': 'row',
        items: [
          {
            key: 'phone_number[].type', flex: '1 1 50px',
            notitle: true, placeholder: 'Type'
          },
          {
            key: 'phone_number[].number', flex: '4 4 200px',
            notitle: true, placeholder: 'Phone Number',
          }
        ]
      }]
    },
    {
      type: 'section',
      title: 'Notes',
      expandable: true,
      expanded: false,
      items: [{key: 'event_details', type: 'textarea', notitle: true}]
    }
  ];

  // Sample Data
  data = {
    organizer_name: 'Zaki',
    event_title: 'Scythe - Invaders from afar',
    has_fee: false,
    event_location: {
      street_1: 'Terang Academy',
      city: 'TTDI',
      state: 'KUL',
      zip_code: '60000'
    },
    date: '2019-05-31',
    time: '18:00',
    phone_number: [
      {type: 'cell', number: '+60126393181'},
    ],
    event_details: 'Scythe (1-5 players, 115 minutes) is a board game set in an alternate-history 1920s period. It is a time of farming and war, broken hearts and rusted gears, innovation and valor. In Scythe, each player represents a fallen leader attempting to restore their honor and lead their faction to power in Eastern Europa.'
  };


  constructor() {
  }


  ngOnInit() {
  }

  submit($event) {
    if ($event.has_fee === false && $event.registration_fee)
      delete $event.registration_fee;
    console.log($event);
  }
}

