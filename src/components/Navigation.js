import { NavLink } from 'react-router-dom';
import backIcon from '../images/icons8-back-48.png';
import micIcon from '../images/icons8-microphone-48.png';
import setIcon from '../images/icons8-configuration-32.png';
import '../styles/navigation.css';

const Navigation = () => (
  <nav className="nav-bar">
    <ul>
      <li>
        <NavLink
          to="/"
          end
        >
          <img src={backIcon} alt="back-icon" width="28" height="28" />
        </NavLink>
      </li>
      <li>
        <h1 className="nav-title">Crypto</h1>
      </li>
      <li>
        <img src={micIcon} alt="back-icon" width="24" height="24" />
        <img src={setIcon} alt="back-icon" width="24" height="24" />
      </li>
    </ul>
  </nav>
);

export default Navigation;
