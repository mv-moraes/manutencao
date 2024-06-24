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
              </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard
