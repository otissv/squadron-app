import React from 'react';
import { Link } from 'react-router';
import Icons from 'react-uikit-icons';

const TableAction = ({ item, onClick, view, edit}) => (
  <td>
    <Link
      data-memId={item.id}
      onClick={onClick}
      to={`${view}/${item.id}`}
    >
      <Icons icon='eye' className='Table-action-icon'/>
    </Link>
    <Link data-memId={item.id}
      to={`${edit}/${item.id}`}
      onClick={onClick}
    >
      <Icons icon='edit' className='Table-action-icon'/>
    </Link>
    <a><Icons icon='trash' className='Table-action-icon'/></a>
  </td>
);

export default TableAction;
