import "../styles/global.css";
import Report from "./Report";
import ReportEstoque from "./ReportEstoque";

const Dashboard = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
            <Report />
            <ReportEstoque />
        </div>
        <div className="content-grid-two">
            <div className="grid-two-item">
              <div className="subgrid-two">
              </div>
            </div>

            <div className="grid-two-item">
              <div className="subgrid-two">
                <div className="card-dashboard">
                    Chamados Pendentes
                </div>
                <div className="dashboard-chamados">
                <div>
                    ID
                </div>
                <div>
                    Descrição
                </div>
                <div>
                    Setor
                </div>
                <div>
                    Solicitante
                </div>
                <div>
                    Data e Hora
                </div>
                <div>
                    Prioridade
                </div>
                </div>
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
            </div>
        </div>
    </div>
  )
}

export default Dashboard
