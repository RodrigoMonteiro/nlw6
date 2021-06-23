import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/global.scss'
import '../styles/auth.scss'
import Button from '../components/Button'
import {Link} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'


export default function NewRoom() {

    const {user, SignInWithGoogle} = useAuth()

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
                    <h2>Criar uma nova sala</h2>
                    <form>

                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>

                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}