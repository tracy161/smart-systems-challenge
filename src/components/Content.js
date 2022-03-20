import React, { useState } from 'react';
import Size from './Size';
import '../App.css';

const Content = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <ul className='folders list-unstyled'>
        <li style={{ paddingLeft: '50px' }}>
          {item.type === 'folder' ? (
            <a href='!#' onClick={handleClick}>
              <i
                className={!open ? 'fa fa-angle-right' : 'fa fa-angle-down'}
              ></i>
              <i className={!open ? 'fa fa-folder' : 'fa fa-folder-open'}></i>
              {item.name} &nbsp;{' '}
            </a>
          ) : (
            <a href='#!'>
              <i>&nbsp;</i>
              <i className='fa fa-file-text'></i>
              {item.name} &nbsp;{' '}
              {item.type === 'file' && (
                <small>
                  <Size size={item.size} />
                </small>
              )}
            </a>
          )}

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

export default Content;
