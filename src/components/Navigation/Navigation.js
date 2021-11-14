import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoutesApp from '../RoutesApp/RoutesApp';
import s from './Navigation.module.css';

const activeNavLinkStyle = ({ isActive }) => {
  return {
    color: isActive ? '#7272f8' : '#5757a0',
    borderBottom: isActive ? '5px solid #5757a0' : '5px solid lavender',
  };
};

function Navigation() {
  return (
    <>
      <nav className={s.nav}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <NavLink style={activeNavLinkStyle} to="/" className={s.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={activeNavLinkStyle}
              to="/movies"
              className={s.navLink}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
      <RoutesApp />
    </>
  );
}

activeNavLinkStyle.propTypes = {
  isActive: PropTypes.bool,
};

export default Navigation;
