import React, { useState } from 'react';
import '../App.css';

const Content = ({ child }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setOpen(!open);
  };

  return (
    <>
      <ul className='folders list-unstyled'>
        <li style={{ paddingLeft: '50px' }}>
          <a href='!#' onClick={handleClick}>
            {child.type === 'folder' ? (
              <i
                className={!open ? 'fa fa-angle-right' : 'fa fa-angle-down'}
              ></i>
            ) : <i>&nbsp;</i>}
            <i
              className={
                child.type === 'folder' ? 'fa fa-folder' : 'fa fa-file-text'
              }
            ></i>{' '}
            {child.name}
          </a>
          {open && (
            <div className='dropdown'>
              {child.children.map((item, index) => (
                <ul className='folders list-unstyled'>
                  <li key={index} style={{ paddingLeft: '50px' }}>
                    <a href=''>
                      <i
                        className={
                          item.type === 'folder'
                            ? 'fa fa-folder'
                            : 'fa fa-file-text'
                        }
                      ></i>{' '}
                      {item.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default Content;
