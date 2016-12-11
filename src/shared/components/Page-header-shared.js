import React from 'react';
import { Link } from 'react-router';
import Icons from 'react-uikit-icons';
import Button from 'react-uikit-button';

const PageHeader = (props) => {
  const items = props.items.map(item => {
    return <li
      key={item.href}
      className='App-page-header-toolbar-link'
    >
      <Link to={item.href}>
        <Button context='primary'>
          <Icons icon='plus' />
        </Button>
      </Link>
    </li>;
  });

  return <div className='App-page-header'>
    <h1 className='App-page-header-heading'>{props.title}</h1>
    <ul className='App-page-header-toolbar'>
      {items}
    </ul>
  </div>
};

export default PageHeader;
