import React, { useState } from 'react';
import Content from './Content';

const Panel = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <ul className='folders list-unstyled'>
        <li>
          <a href='!#' onClick={handleClick}>
            <i className={!open ? 'fa fa-angle-right' : 'fa fa-angle-down'}></i>
            <i
              className={!open ? 'fa fa-folder' : 'fa fa-folder-open'}
            ></i>{' '}
            {item.name}
          </a>
          {open && (
            <div className='dropdown'>
              {item.children.map((item, index) => (
                <Content key={index} item={item} />
              ))}
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default Panel;
