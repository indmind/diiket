import { useEffect, useState } from "react";
import axios from "axios";

import "./RandomUser.css";

export default function RandomUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setUser(null);

      const res = await axios.get('https://randomuser.me/api');

      setUser(res.data.results[0]);
    }

    // random user tiap 3 detik
    const intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);  
  }, []);

  return (
    <section id="random-user">
      <div className="header text-center">
        <h3 className="small-title">Lovely Users</h3>
        <h2 className="title">Gatau ini siapa, tugasnya disuruh gini</h2>
      </div>

      <div id="user-card" className={!user ? 'loading' : ''}>
        <div id="user-content">
          <div id="user-general">
            <div id="user-picture">
              <img id="user-picture-img" src={user?.picture?.large} alt='' />
            </div>
            <div id="user-infos">
              <label id="user-infos-firstname">{user?.name?.first}</label>
              <p id="user-infos-lastname">{user?.name?.last}</p>
              <b>-</b>
              <p id="user-infos-location">
                {user?.location?.street?.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
