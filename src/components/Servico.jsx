import "../styles/global.css";
import { BsFillSignpost2Fill } from "react-icons/bs";
import { PiSirenFill } from "react-icons/pi";

const Servico = () => {
    return (
        <div className="main-content-holder">
            <div>
            <button className="button-filtro">
            <BsFillSignpost2Fill />
            Setor
          </button>
          <button className="button-filtro">
           Mais recentes
          </button>
          <button className="button-filtro">
            Mais antigos
          </button>
          <button className="button-filtro">
          <PiSirenFill />
           Prioridade
          </button >
          </div>
          
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Pesquisar por ID" 
           />
          </div>
          
          <button className='button-cadastro'>
           Nova Solicitação
          </button>
          <div className="dashboard-chamados-pendente">
                    <div>
                    2077
                    </div>
                    <div>
                    Troca de cadeira
                    </div>
                    <div>
                    Comercial
                    </div>
                    <div>
                    Caroline Aquino
                    </div>
                    <div>
                    25/06/2024
                    13:07
                    </div>
                    <div>
                    Urgente
                    </div>
                </div>
        </div>
      )
    }

export default Servico
