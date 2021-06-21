import './Teams.css';

import alvin from '../../assets/images/teams/alvin.png';
import jalu from '../../assets/images/teams/jalu.png';
import tio from '../../assets/images/teams/tio.png';

export default function Teams() {
  return (
    <section className="section-team">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <div className="header-section">
              <h3 className="small-title">Tentang Kami</h3>
              <h2 className="title">Mari bertemu dengan anggota tim kami</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-lg-4">
            <div className="single-person">
              <div className="person-image">
                <img src={alvin} alt="" />
                <span className="icon-wrapper">
                  <i className="fas fa-drafting-compass"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Alvin Pandu Irawan</h3>
                <span className="speciality">Hipster</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="single-person">
              <div className="person-image">
                <img src={jalu} alt="" />
                <span className="icon-wrapper">
                  <i className="fas fa-fax"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Adecya Jalu Mahadwija</h3>
                <span className="speciality">Hustler</span>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-4">
            <div className="single-person">
              <div className="person-image">
                <img src={tio} alt="" />
                <span className="icon-wrapper">
                  <i className="fas fa-code"></i>
                </span>
              </div>
              <div className="person-info">
                <h3 className="full-name">Tio Misbaqul Irawan</h3>
                <span className="speciality">Hacker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}