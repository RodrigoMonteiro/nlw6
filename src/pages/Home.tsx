import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/global.scss'
import '../styles/auth.scss'
import Button from '../components/Button'

import { useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth'

export default function Home() {
    const history = useHistory()
    const { SignInWithGoogle, user } = useAuth()

    async function handleCreateNewRoom() {

        if (!user) {
            await SignInWithGoogle()
        }

        history.push('/rooms/new')
    }
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustracao" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas da sua turma em tempo real</p>
            </aside>
            <main className="main-content">
                <div>
                    <img src={logoImg} alt="logo" />
                    <button onClick={handleCreateNewRoom} className="create-room">
                        <img src={googleIconImg} alt="google" />
                        Crie sua sala com o google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>

                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>

                    </form>
                </div>
            </main>
        </div>
    )
}