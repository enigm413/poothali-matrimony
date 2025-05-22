import { supabase } from "../../supabaseClient";
import { detailIcons } from "../../Data/profilesData";
import { useState, useEffect } from "react";

//Function To Define Profiles Components
export default function Profiles() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { error, data } = await supabase
        .from("RegisteredUsers")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.log(error);
        return;
      }

      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <section className="section-profiles" id="section-profiles">
      <div className="title-wrapper wrapper justify-content--space-between ">
        <h1 className="profiles-title">Browse Admin-Verified Profiles</h1>
        <button className="btn btn--filter">Filter &#11206;</button>
      </div>

      <div className="profiles-wrapper wrapper">
        {users.map((profile) => {
          const { id, img, name, ...props } = profile;
          return (
            <article className="profile-card" key={id}>
              <img
                src={img}
                alt={name}
                className="profile-card-img"
                loading="lazy"
              />

              <div className="profile-card-text-wrapper">
                <p className="profile-name">{name}</p>

                <ul className="profile-card-detail-list">
                  {detailIcons.map((detailIcon) => {
                    const { icon, text } = detailIcon;
                    return (
                      <li className="profile-card-detail-item" key={text}>
                        <span className="profile-card-detail-icon">
                          <ion-icon name={icon}></ion-icon>
                        </span>
                        <span className="profile-card-detail-text">
                          {props[text]} Years
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <button className="btn btn--info">More Info</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
