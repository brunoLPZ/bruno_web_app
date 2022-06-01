import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Close, Menu } from '@mui/icons-material';

export function Nav(props) {
  const location = useLocation();
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    if (location.pathname) {
      let tmp = location.pathname.split('/')[1];
      setPathName(tmp);
    }
  }, [location]);

  if (!pathName || pathName === 'experience') {
    return (
      <div>
        <div className='App-Menu-Btn'>
          {props.menuOpen ? (
            <Close sx={{ fontSize: 40 }} onClick={props.toggleMenu}></Close>
          ) : (
            <Menu sx={{ fontSize: 40 }} onClick={props.toggleMenu}></Menu>
          )}
        </div>
        {props.menuOpen ? (
          <nav className='App-Nav'>
            <NavLink
              onClick={props.toggleMenu}
              to='/'
              className={({ isActive }) => (isActive ? 'App-Nav-Active' : '')}
            >
              home
            </NavLink>
            <NavLink
              onClick={props.toggleMenu}
              to='/experience'
              className={({ isActive }) => (isActive ? 'App-Nav-Active' : '')}
            >
              experiencia
            </NavLink>
          </nav>
        ) : (
          <nav></nav>
        )}
      </div>
    );
  }
  return <div></div>;
}
