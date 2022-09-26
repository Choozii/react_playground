import React from 'react';
import List from '../../components/events/List';
import Select from '../../components/filter/Select';

const AllEventsPage = () => {
      const events = [{
        id : '1',
        title : 'title',
        description : 'description'
        },
        {
          id : '2',
          title : 'title2',
          description : 'description2'
          },
          {
            id : '3',
            title : 'title3',
            description : 'description3'
            }]
      return (
        <div>
          <Select year={['2022', '2012']} month={['01', '02', '03']}/>
          <List events={events}/>
        </div>)
        }

export default AllEventsPage;