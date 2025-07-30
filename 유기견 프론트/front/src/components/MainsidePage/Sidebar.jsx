import React, { useEffect, useRef, useState } from 'react';
import styles from '../../css/sidebar.module.css';

const Sidebar = ({ width = 280, children }) => {
  const [isOpen, setOpen] = useState(false);
  const [xPosition, setX] = useState(-width);
  const side = useRef();

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
      setOpen(true);
    } else {
      setX(-width);
      setOpen(false);
    }
  };

  const handleClose = (e) => {
    if (side.current && !side.current.contains(e.target)) {
      setX(-width);
      setOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === ' ' && document.activeElement.tagName === 'BUTTON') {
      e.preventDefault(); 
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClose);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('click', handleClose);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div
        ref={side}
        className={styles.sidebar}
        style={{
          width: `${width}px`,
          height: '100%',
          transform: `translatex(${-xPosition}px)`,
        }}
      >
        <button
          onMouseDown={(e) => {
            e.preventDefault();
            toggleMenu();
          }}
          className={styles.button}
        >
          {isOpen ? (
            <span>X</span>
          ) : (
            <img
              src="book.png"
              alt="contact open button"
              className={styles.openBtn}
            />
          )}
        </button>

        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
