import React from 'react' // Núcle do React é aonde tem todas as funções 
import ReactDOM from 'react-dom/client' // Importando react para trabalhar com o browser
import {App} from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)