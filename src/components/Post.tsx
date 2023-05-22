import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react';

//estado
// estado = Algo que eu quero que o React monitore

interface Author{
    name: string;
    role : string;
    avatarURL: string;
}

interface Content{
    content : string;
    type: "Paragraph" | "link";
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post({author, publishedAt, content} : PostProps){
    const [comments, setComments] = useState([
        'Muito bom!'
    ]);

    const [newCommentText, setNewCommentText ] = useState('')

    const publishedDateFormated = format(publishedAt, "dd 'de' LLLL 'às' HH:MMh", {
        locale: ptBR
    });

    const relativeDate = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true 
    });
    
    function handleCreateNewComment(event : FormEvent) {
        event.preventDefault();

        setComments([...comments, newCommentText]);

        setNewCommentText('');

    }
    
    function handleNewCommentChange(event : ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("")
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event : InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo obrigatorio!")
    }
    
    function deleteComment(commentToDelete : string) {
        const commentWithOutDelete = comments.filter((comment => {
            return comment != commentToDelete
        }))
        setComments(commentWithOutDelete)
    }
    
    const isNewCommentEmpty = newCommentText.length == 0;

    return (
        <article className={styles.post}>
            <header className={styles.content}>
                <div className={styles.author}>
                    <Avatar hasBorder={false}  src={author.avatarURL} alt = ""/>
                    <div className={styles.authorInfor}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                        
                    </div>
                </div>
                <time title='11 de maio às 08:13h' dateTime={publishedDateFormated}>
                    {relativeDate}
                </time>
            </header>
            <div className={styles.content}>
                {
                    content.map(line => {
                        return line.type == "link" ? <p key = {line.content}>{line.content}</p> : <p key={line.content}><a href="#">{line.content}</a></p> 
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu Feedback</strong>
                <textarea 
                    name = 'comment'
                    placeholder='Digite algo' 
                    onChange={handleNewCommentChange} 
                    value={newCommentText}
                    onInvalid={handleNewCommentInvalid}
                    required
                ></textarea>

                
                <footer>
                    <button type='submit' disabled = {isNewCommentEmpty}>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
              {comments.map(comment => {
                    return <Comment 
                        key= {comment} 
                        content={comment} 
                        onDeleteComment = {deleteComment}
                    />
                })}
            </div>
        </article>
    )
}