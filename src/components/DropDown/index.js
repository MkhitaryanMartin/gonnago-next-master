import React, { useState } from 'react';
import { Dropdown, Space } from 'antd';
import CursorDown from '../../components/svg/cursor-down';
import { langs as items } from '../../assets/data';
import "./style.css"

const DropdownLang = ({
    value,
    handleSetLang
}) => {
  const [open, setOpen] = useState(false);
 

  const handleMenuClick = (e) => {
    handleSetLang("lang",e.key);
    if (e.key !== value) {
      setOpen(false);
    }
  };

  const handleOpenChange = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen);
    }
  };



  return (
    <Dropdown
      trigger={['click']}
      menu={{
        items,
        onClick: handleMenuClick,
      }}
      onOpenChange={handleOpenChange}
      open={open}
      
    >
      <div className='dropdown-container'>
        <a onClick={(e) => e.preventDefault()}>
          <Space className='space'>
            {value}
            <CursorDown/>
          </Space>
        </a>
      </div>
    </Dropdown>
  );
};

export default DropdownLang;