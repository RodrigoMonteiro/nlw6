import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import '../styles/global.scss'
import '../styles/auth.scss'
import Button from '../components/Button'
import {Link, useHistory} from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

import {FormEvent, useState} from 'react'
import { database } from '../services/firebase'


export default function NewRoom() {

    const [newRoom, setNewRoom] = useState('')

    const {user, SignInWithGoogle} = useAuth() 

    const history = useHistory()

async function handleCreateRoom(event : FormEvent){

    event.preventDefault()

    if(newRoom.trim() === ''){
        return
    }
const roomRef = database.ref('rooms')
const fireBaseRoom = await roomRef.push({
    title: newRoom,
    authorId: user?.id
})

history.push(`/rooms/${fireBaseRoom.key}`)
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>

                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar sala</Button>

                    </form>
                    <p>Quer entrar em uma sala existente? <Link to="/">clique aqui</Link></p>
                </div>
            </main>
        </div>
    )
}