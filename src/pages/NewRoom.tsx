import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleIconImg from '../assets/img/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
  return (
    <div id="page-auth">

      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A oa-vivo</strong>
        <p>Tire suas dúvidas da sua audiência em tempo real</p>
      </aside>

      <main>

        <div className="main-content">
          <img src={logoImg} alt="LetmeAsk" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>

          </form>

          <p>Quer entrar em uma sala existente? <a href="#">clique aqui</a></p>

        </div>

      </main>

    </div>
  );
}