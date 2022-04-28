import * as C from "./styles";

export function ButtonAuth({ children, ...props }) {
  console.log(props);
  return (
    <C.Container
      name={props.name}
      color={props.color}
      isBackground={props.backgroundColor}
    >
      {props.icon}
    </C.Container>
  );
}
