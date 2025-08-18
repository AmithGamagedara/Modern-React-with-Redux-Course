import React from 'react'
import Table from './Table';

function SortableTable(props) {
    const { config } = props;

    const updatedConfig = config.map((column) => {
        if(!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th>{column.label} IS SORTABLE</th>
        }
    })
  return (
    <div><Table {...props} config={updatedConfig}/></div>
  )
}

export default SortableTable;