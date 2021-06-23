import copyImage from '../assets/images/copy.svg'
import '../styles/room-code.scss'

type RoomCodeProps ={
    code: string

}

export default function RoomCode(props : RoomCodeProps){
    
    function copyRoomCodeToClipboard(){
        navigator.clipboard.writeText(props.code)

    }
    return(

        <button className="room-code" onClick={copyRoomCodeToClipboard}>
            <div>
                <img src={copyImage} alt="copy" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    )
}