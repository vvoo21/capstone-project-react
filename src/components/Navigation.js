import { NavLink } from 'react-router-dom';
import backIcon from '../images/icons8-back-48.png';
import micIcon from '../images/icons8-microphone-48.png';
import setIcon from '../images/icons8-configuration-32.png';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <NavLink
          to="/"
          end
        >
          <img src={backIcon} alt="back-icon" width="24" height="24" />
        </NavLink>
      </li>
      <li>
        <span>top coins</span>
      </li>
      <li>
        <img src={micIcon} alt="back-icon" width="24" height="24" />
        <img src={setIcon} alt="back-icon" width="24" height="24" />
      </li>
    </ul>
  </nav>
);

export default Navigation;
