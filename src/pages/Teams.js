import './Teams.css';

import alvin from '../assets/images/teams/alvin.png';
import jalu from '../assets/images/teams/jalu.png';
import tio from '../assets/images/teams/tio.png';

export default function Teams() {
  return (
    <section class="section-team">
      <div class="container">
        <div class="row justify-content-center text-center">
          <div class="col-md-8">
            <div class="header-section">
              <h3 class="small-title">Tentang Kami</h3>
              <h2 class="title">Mari bertemu dengan anggota tim kami</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <div class="single-person">
              <div class="person-image">
                <img src={alvin} alt="" />
                <span class="icon-wrapper">
                  <i class="fas fa-drafting-compass"></i>
                </span>
              </div>
              <div class="person-info">
                <h3 class="full-name">Alvin Pandu Irawan</h3>
                <span class="speciality">Hipster</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="single-person">
              <div class="person-image">
                <img src={jalu} alt="" />
                <span class="icon-wrapper">
                  <i class="fas fa-fax"></i>
                </span>
              </div>
              <div class="person-info">
                <h3 class="full-name">Adecya Jalu Mahadwija</h3>
                <span class="speciality">Hustler</span>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4">
            <div class="single-person">
              <div class="person-image">
                <img src={tio} alt="" />
                <span class="icon-wrapper">
                  <i class="fas fa-code"></i>
                </span>
              </div>
              <div class="person-info">
                <h3 class="full-name">Tio Misbaqul Irawan</h3>
                <span class="speciality">Hacker</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}