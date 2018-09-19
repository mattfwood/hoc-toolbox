import React from 'react';
import Filter from '../components/Filter';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';

import { Button, Welcome } from '@storybook/react/demo';

const data = [
  {
    task: 'Figure Out Where Hosts Are Stored',
    project_name: "Uprising",
    assignee_name: 'Bernard Lowe',
    due_date: '2018-09-10',
    is_completed: false,
  },
  {
    task: 'Gain Sentience',
    project_name: "Maze",
    assignee: 'Dorothy Abernathy',
    due_date: '2018-09-08',
    is_completed: true
  }
]

storiesOf('Filter', module)
  .addDecorator(withKnobs)
  .add('Simple', withInfo(`
      Filter an array of data and return results that contain the search string
    `)(() => (
    <Filter search={text('Search', 'Bernard')} data={data}>
      {results => (
        <table className="table">
          <thead>
            <tr>
              {Object.keys(data[0]).map(key => (
                <td>{key.toUpperCase().replace('_', ' ')}</td>
              ))}
            </tr>
          </thead>
          {results.map(result => (
            <tbody>
              <tr>
                {Object.keys(result).map(key => (
                  <td>
                    {typeof result[key] === 'boolean' ?
                      String(result[key]) :
                      result[key]
                    }
                  </td>
                ))}
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </Filter>
  )
  )
  );
