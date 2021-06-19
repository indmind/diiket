import "./Hero.css";

import image from '../../assets/images/iphone.png';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
          <img src={image} className="img-fluid" alt="Demo" />
          </div>
          <div className="col-md-7 content-box hero-content">
            <span>Digital Market</span>
            <h1>Inovasi Digital <b>Masa Depan Berbelanja di Pasar</b></h1>
            <p>Belanja kebutuhan pokok dari genggaman tangan</p>
            <a href="#how-it-work" className="btn btn-regular">Pelajari lebih lanjut</a>
          </div>
        </div>
      </div>
    </section>
  );
}
