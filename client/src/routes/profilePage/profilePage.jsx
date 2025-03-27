import "./profilePage.css";
import Image from "../../components/image/image";
import { useState } from 'react';
import Gallery from '../../components/gallery/gallery';
import Collections from "../../components/collections/collections";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import apiRequest from "../../utils/apiRequest";

const ProfilePage = () => {

  const [type, setType] = useState("saved")
  const { username } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["profile", username],
    queryFn: () => apiRequest.get(`/users/${username}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  if (!data) return "User not found!";

  return (
    <div className="profilePage">
      <Image
        className="profileImg"
        w={100}
        h={100}
        src={data.img}
        alt=""
      />
      <h1 className="profileName">{data.displayName}</h1>
      <span className="profileUsername">@{data.username}</span>
      <div className="followCounts">10 followers 20 followings</div>
      <div className="profileInteractions">
        <Image path="/general/share.svg" alt="" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Image path="/general/more.svg" alt="" />
      </div>
      <div className="profileOptions">
        <span onClick={()=>setType("created")} className={type==="created" ? "active" : ""}>Created</span>
        <span onClick={()=>setType("saved")} className={type==="saved" ? "active" : ""}>Saved</span>
      </div>
      <div className="profileView">
        {type==="created" ? <Gallery userId={data._id} /> : <Collections/>}
      </div>
    </div>
  );
};

export default ProfilePage;
