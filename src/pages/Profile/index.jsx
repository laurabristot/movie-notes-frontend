import { Container, Content, Avatar } from "./styles";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";


export function Profile(){
  return (
    <Container>
      <header>

      <Link to={"/"}>
        <FiArrowLeft/>
        Voltar
      </Link>

      </header>

      <Content>

        <Avatar>
        <img src="https://github.com/laurabristot.png" alt="" />
        <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>


        <Input
          icon={FiUser}
          value="Laura Bristot"
          readOnly
        />
        <Input
          icon={FiMail}
          value="laurabristotbarbi@hotmail.com"
          readOnly
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Senha atual"
        />
        <Input
          icon={FiLock}
          type="password"
          placeholder="Nova senha"
        />

        <Button
          disabled={true}
          title="Salvar"
        />

      </Content>

    </Container>
  )
}