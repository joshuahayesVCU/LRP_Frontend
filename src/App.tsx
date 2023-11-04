import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"

import DashboardItem from "./components/DashboardItem/DashboardItem"

import pantries from "./pantries.json";

function App() {
  return (
    <>
      <div className="Dashboard-grid">
        {pantries.map((item, index) => (
          <div className="DashboardItems">
            <DashboardItem key={index} item={item} />
          </div>
          ))}
      </div>
    </>
  );
}

export default App;
