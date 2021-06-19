import { Link } from 'react-router-dom';
import "./Navbar.css";

import logo from '../../assets/images/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar navbar-default navbar-expand-lg fixed-top custom-navbar">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="icon ion-md-menu"></span>
      </button>
      <img src={logo} className="img-fluid nav-logo-mobile" alt="Company Logo" />
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="container d-flex align-items-center">
          <img src={logo} className="img-fluid nav-logo-desktop" alt="Company Logo" />
          <ul className="navbar-nav ml-auto nav-right" data-easing="easeInOutExpo" data-speed="1250" data-offset="65">
            <li className="nav-item nav-custom-link">
              <Link to="/" className="nav-link">Home <i className="icon ion-ios-arrow-forward icon-mobile"></i></Link>
            </li>
            <li className="nav-item nav-custom-link">
              <Link to="/teams" className="nav-link" href="#testimonials">Tentang kami <i className="icon ion-ios-arrow-forward icon-mobile"></i></Link>
            </li>
            <li className="nav-item nav-custom-link">
              <Link to="/contact" className="nav-link">Hubungi kami <i className="icon ion-ios-arrow-forward icon-mobile"></i></Link>
            </li>
            <li className="nav-item nav-custom-link btn btn-demo-small ml-2">
              <a className="nav-link" href="/#how-it-work">Pelajari lebih lanjut <i className="icon ion-ios-arrow-forward icon-mobile"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
