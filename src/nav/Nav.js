import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export function Nav() {
  const location = useLocation();
  const [pathName, setPathName] = useState(null);

  useEffect(() => {
    if (location.pathname) {
      let tmp = location.pathname.split('/')[1];
      setPathName(tmp);
    }
  }, [location]);

  return !pathName || pathName === 'experience' ? (
    <nav className='App-Nav'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'App-Nav-Active' : '')}
      >
        home
      </NavLink>
      <NavLink
        to='/experience'
        className={({ isActive }) => (isActive ? 'App-Nav-Active' : '')}
      >
        experiencia
      </NavLink>
    </nav>
  ) : (
    <div></div>
  );
}
