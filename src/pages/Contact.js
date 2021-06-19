import { useForm } from "react-hook-form";

import "./Contact.css";

export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const body = `Nama: ${data.name}%0D%0AEmail: ${data.email}%0D%0ANomor Telepon: ${data.phone || '-'}%0D%0A%0D%0A${data.message}`;

    window.open('mailto:tioirawan063@gmail.com?subject=Diiket - Contact Us&body=' + body);
  };

  return (
    <div className="Contact">
      <section id="contact-us">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Hubungi Kami</h1>
            <p className="p-0 mb-5">Kami ingin mendengar banyak darimu!</p>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nama *" {...register("name", { required: true, maxLength: 20 })} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Email *" {...register("email", { required: true })} />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Nomor Telepon" {...register("phone")} />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Pesanmu *" rows="4" {...register("message")}></textarea>
                </div>
                <div className="form-group">
                  <input type="submit" name="btnSubmit" value="Kirim" className="btn btn-regular" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
