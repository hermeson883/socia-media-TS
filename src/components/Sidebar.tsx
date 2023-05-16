import { Avatar } from './Avatar'
import sidebar from './Sidebar.module.css'
import {PencilLine} from 'phosphor-react'

export function Sidebar(){
    return(
        <aside className={sidebar.sidebar}>

            <img className={sidebar.cover} src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=10" alt="Imagem de perfil do usuário" />
            
            <div className={sidebar.profile}>
                <Avatar src ='https://avatars.githubusercontent.com/u/72263429?v=4'/>
                <strong>Hermeson V Beserra</strong>
                <span>Web developer & DataScience</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar o seu perfil
                </a>
            </footer>
        </aside>
    )

}