import { useState, useEffect } from "react";

import { store } from "../../facilities/store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as C from "./styles";
import { FiLogOut } from "react-icons/fi";
import MusicLegend from "../../assets/music-legends.png";
import { ProfileImages } from "../ProfileImages";
import Borda from "../../assets/borda.png";
export function Header({ children, isProfile, nickName }) {
  const [profile, setProfile] = useState(false);
  const initialValue = {
    name: "Yasuo",
    image:
      "https://i.pinimg.com/originals/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
  };
  const [imageProfile, setImageProfile] = useState(initialValue);

  const navigate = useNavigate();

  useEffect(() => {
    const image = store.getStorage("image");
    if (image) {
      setImageProfile(image);
    }
  }, []);

  const logoutClient = () => {
    store.removeStorage("user");
    toast.success("Logout efetuado com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    navigate("/");
  };

  const handleProfile = () => {
    if (profile) {
      setProfile(false);
      return;
    }
    setProfile(true);
  };

  const handleImageProfile = (element) => {
    store.setStorage("image", element);
    setImageProfile(element);
    setProfile(false);
  };

  return (
    <C.Container>
      <div className="lib">
        <p className="info">Biblioteca de Musicas</p>
      </div>

      <img className="logo" alt="music-legends" src={MusicLegend} />

      <C.ContainerUser>
        <p className="info">{nickName}</p>
        <div className="profile">
          <img src={imageProfile.image} alt={imageProfile.name} />
          <img
            className="borda"
            src={Borda}
            alt="borda-lvl-500"
            onClick={handleProfile}
          />
          <FiLogOut onClick={() => logoutClient()} />
        </div>
      </C.ContainerUser>

      {profile && isProfile && (
        <ProfileImages onClickOn={(element) => handleImageProfile(element)} />
      )}
    </C.Container>
  );
}
