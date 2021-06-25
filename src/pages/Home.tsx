import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/global.scss'
import '../styles/auth.scss'
import Button from '../components/Button'

import { useHistory } from 'react-router-dom'

import { database } from '../services/firebase'

import { FormEvent, useState } from 'react'

import { useAuth } from '../hooks/useAuth'

export default function Home() {
    const history = useHistory()
    const { SignInWithGoogle, user } = useAuth()
    const [roomCode, setRoomCode] = useState('')

    async function handleCreateNewRoom() {

        if (!user) {
            await SignInWithGoogle()
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {

        event.preventDefault()

        if (roomCode.trim() === '') {
            return
        }
        const roomRef = await database.ref(`rooms/${roomCode}`).get()


        if (!roomRef.exists()) {
            alert('Room does not exists.')
            return
        }

        if(!roomRef.val().endedAt){
            alert('Room already closed.')
            return
        }

        history.push(`/rooms/${roomCode}`)



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
                    <form onSubmit={handleJoinRoom}>

                        <input
                            type="text"
                            placeholder="Digite o codigo da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">Entrar na sala</Button>

                    </form>
                </div>
            </main>
        </div>
    )
}