import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { red, grey } from "@mui/material/colors";
import {
  AiOutlineArrowRight,
  AiFillEyeInvisible,
  AiFillEye,
} from "react-icons/ai";
import { toast } from "react-toastify";

import { ButtonAuth } from "../../components/ButtonAuth";
import LogoLogin from "../../assets/logo-login.png";
import Wallpaper from "../../assets/wallpaper.jpg";
import { themeAuthButtons } from "./themeAuthButtons";
import { store } from "../../facilities/store";
import * as C from "./styles";

export function Login() {
  const [nameFocus, setNameFocus] = useState(true);
  const [nameInput, setNameInput] = useState("Yasuo");
  const [passwordInput, setPasswordInput] = useState("yasuo");
  const [passwordFocus, setPasswordFocus] = useState(true);
  const [type, setType] = useState("password");
  const navigate = useNavigate();

  const handleFocus = (type) => {
    if (type === "name" && nameInput === "") {
      setNameFocus(true);
      return;
    }
    if (type === "password" && passwordInput === "") {
      setPasswordFocus(true);
      return;
    }
    if (nameInput === "") {
      setNameFocus(false);
    }
    if (passwordInput === "") {
      setPasswordFocus(false);
    }
  };

  const login = (name) => {
    store.setStorage("user", name);
    toast.success("Login efetuado com sucesso!", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    navigate("/music-player");
  };

  return (
    <C.Container onBlur={handleFocus}>
      <C.ContainerLogin>
        <img src={LogoLogin} alt="logo-riot-games" />
        <h1>Fazer Login</h1>

        <C.ContainerInput isFocus={nameFocus}>
          <C.Input
            value={nameInput}
            onFocus={() => handleFocus("name")}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <label className="name">NOME DE USUÁRIO</label>
        </C.ContainerInput>

        <C.ContainerInput isFocus={passwordFocus}>
          <C.Input
            value={passwordInput}
            type={type}
            onFocus={() => handleFocus("password")}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <label className="password">SENHA</label>
          {type === "password" ? (
            <AiFillEyeInvisible onClick={() => setType("text")} />
          ) : (
            <AiFillEye onClick={() => setType("password")} />
          )}
        </C.ContainerInput>

        <C.ContainerAuth>
          {themeAuthButtons.map((element) => (
            <ButtonAuth
              key={element.id}
              name={element.name}
              color={element.color}
              backgroundColor={element.backgroundColor}
              icon={element.icon}
            />
          ))}
        </C.ContainerAuth>

        <div className="checkbox">
          <Checkbox
            defaultChecked
            sx={{
              width: "12px",
              color: grey[500],
              "&.Mui-checked": {
                color: red[600],
              },
            }}
          />
          <label>Manter login</label>
        </div>

        <C.Button
          onClick={() => login(nameInput)}
          isActive={nameInput && passwordInput !== ""}
        >
          <AiOutlineArrowRight />
        </C.Button>
        <C.Info>NÃO CONSEGUE INICIAR SESSÃO?</C.Info>
        <C.ContainerInfo>
          <C.Info>CRIAR CONTA</C.Info>
          <C.Info className="version">V48.0.0</C.Info>
        </C.ContainerInfo>
      </C.ContainerLogin>
      <C.Background src={Wallpaper} alt="wallpaper-lol" />
    </C.Container>
  );
}
