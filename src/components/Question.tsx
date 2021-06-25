import '../styles/question.scss'
import  {ReactNode} from 'react'
type QuestionType = {
    content : string,
    author: {
        name: string,
        avatar: string
    },
    children?: ReactNode,
    isAnswered?: boolean,
    isHighlighted?: boolean 

}

export default function Question({content , author , children, isAnswered = false, isHighlighted = false} : QuestionType){
    console.log(content)
    return(
        <div className={`question ${isAnswered ? 'answered' : ''} ${isHighlighted ? 'highlighted' : ''}`}>
            
            <p>{content} </p>
            <footer>
                <div className="user-info">
                    <img src={author.avatar} alt={author.name} />
                    <span>{author.name}</span>

                </div>
                <div>
                    {children}
                </div>
            </footer>
        </div>
    )
}