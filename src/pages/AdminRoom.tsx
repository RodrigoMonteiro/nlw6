import LogoImage from '../assets/images/logo.svg'
import DeleteImage from '../assets/images/delete.svg'
import checkImage from '../assets/images/check.svg'
import answerImage from '../assets/images/answer.svg'

import RoomCode from '../components/RoomCode'


import { useParams, useHistory } from 'react-router-dom'


import '../styles/rooms.scss'

import Button from '../components/Button'

import Question from '../components/Question'
import { useRoom } from '../hooks/useRoom'

import { database } from '../services/firebase'

type RoomParams = {
    id: string
}

export default function AdminRoom() {


    const params = useParams<RoomParams>()
    const roomId = params.id
    const { title, questions } = useRoom(roomId)

    const history = useHistory()

    async function handleDeleteQuestion(questionId: string) {
        if (window.confirm('Tem certeza que deseja excluir esta pergunta?')) {

            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()


        }
    }

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        })
    }

    async function handleHighLightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true
        })

    }

    async function handleEndRoom() {
        database.ref(`rooms/${roomId}`).update({
            endedAt: new Date()
        })

        history.push('/')
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={LogoImage} alt="logo" />
                    <div>
                        <RoomCode code={roomId} />
                        <Button isOutLined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <div className="question-list">
                    {questions.map(question => {
                        return (
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighlighted={question.isHighlighted}
                            >
                                {!question.isAnswered && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                        >
                                            <img src={checkImage} alt="checkImage" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleHighLightQuestion(question.id)}
                                        >
                                            <img src={answerImage} alt="answerImage" />
                                        </button>
                                    </>
                                )
                                }
                                <button
                                    type="button"
                                    onClick={() => handleDeleteQuestion(question.id)}
                                >
                                    <img src={DeleteImage} alt="deleteImage" />
                                </button>

                            </Question>
                        )
                    })}
                </div>
            </main>
        </div>)
}