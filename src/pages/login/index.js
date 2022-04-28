import * as C from "./styles";
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { red, grey } from "@mui/material/colors";
import { AiOutlineArrowRight } from "react-icons/ai";

import LogoLogin from "../../assets/logo-login.png";
import Wallpaper from "../../assets/wallpaper.jpg";
import { themeAuthButtons } from "./themeAuthButtons";
import { ButtonAuth } from "../../components/ButtonAuth";

export function Login() {
  const [nameFocus, setNameFocus] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordFocus, setPasswordFocus] = useState(false);

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

  return (
    <C.Container onBlur={handleFocus}>
      <C.ContainerLogin>
        <img src={LogoLogin} alt="logo-riot-games" />
        <h1>Fazer Login</h1>

        <C.ContainerInput isFocus={nameFocus}>
          <C.Input
            onFocus={() => handleFocus("name")}
            onChange={(e) => setNameInput(e.target.value)}
          />
          <label className="name">NOME DE USUÁRIO</label>
        </C.ContainerInput>

        <C.ContainerInput isFocus={passwordFocus}>
          <C.Input
            onFocus={() => handleFocus("password")}
            onChange={(e) => setPasswordInput(e.target.value)}
          />
          <label className="password">SENHA</label>
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

        <C.Button isActive={nameInput && passwordInput !== ""}>
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
