import { Drawer } from 'antd';
import './style.css';

const MyDrawer = ({ 
  open,
   onClose, 
   children, 
   placement = "left", 
   title, 
   closable = false, 
   height = "" ,
   name=""
  }) => {
  const styles = {
    header: {
      textAlign: "end"
    },

  };
  return (
    <Drawer
      title={title}
      closable={closable}
      onClose={()=>onClose(name)}
      open={open}
      placement={placement}
      className='custom-drawer'
      width="100%"
      height={height}
      styles={styles}
    >
      {children}
    </Drawer>
  );
};

export default MyDrawer;
