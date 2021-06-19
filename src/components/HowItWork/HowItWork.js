import "./HowItWork.css";

import HowItWorkItem from "./Item/HowItWorkItem";

export default function HowItWork() {
  return (
    <section id="how-it-work">
      <div className="container">
        <div className="title-block">
          <h2>Cara Kerja</h2>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <HowItWorkItem
              imgSrc={require('../../assets/images/cart.png').default}
              title="1. Pesan"
              body="Pesan barang kebutuhan pokok kamu langsung dari aplikasi mobile"
            />
          </div>

          <div className="col-lg-4">
            <HowItWorkItem
              imgSrc={require('../../assets/images/process.png').default}
              title="2. Siapkan"
              body="Pedagang akan menyiapkan pesananmu langsung setelah kamu menekan tombol pesan"
            />
          </div>

          <div className="col-lg-4">
            <HowItWorkItem
              imgSrc={require('../../assets/images/motor.png').default}
              title="3. Antar"
              body="Setelah disiapkan, pesananmu akan langsung diantar oleh tukang ojek ke alamat rumahmu"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
