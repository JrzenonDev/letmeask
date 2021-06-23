import illustrationImg from '../assets/img/illustration.svg';
import logoImg from '../assets/img/logo.svg';
import googleIconImg from '../assets/img/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
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
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>

          <div className="separator">ou entre na sala</div>

          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>

          </form>

        </div>

      </main>

    </div>
  );
}