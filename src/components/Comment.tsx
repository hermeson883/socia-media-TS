import { useState } from 'react';
import { Avatar } from './Avatar';
import style from './Comment.module.css';
import {ThumbsUp, Trash} from 'phosphor-react'


interface CommentProps{
    content : string;
    onDeleteComment: (comment : string) => void; 
}

export function Comment({content, onDeleteComment} : CommentProps){
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeCounter() {
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {
        return (
            onDeleteComment(content)
        );
    }

    return (
        <div className={style.comment}>
            <Avatar src="https://github.com/hermeson883.png" hasBorder= {false} alt=''/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Hermeson V Beserra <span>(vôce) </span></strong>
                            <time title='11 de Maio às 08:13h' dateTime="2023-05-11 08:13:30">Cerca de 1H atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size = {20}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeCounter}>
                        <ThumbsUp size={20} />
                        Aplaudir  <span>{likeCount}</span>
                    </button>
                </footer>

            </div>
        </div>
    )
}

