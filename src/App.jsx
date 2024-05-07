
import './App.css'
import DaisyNav from './Components/DaisyNav/DaisyNav'
import LineCharts from './Components/LineCharts/LineCharts'
import NavBar from './Components/NavBar/NavBar'
import Phones from './Components/Phones/Phones'
import PriceOptions from './Components/PriceOptions/PriceOptions'


function App() {

  return (
    <div>
      {/* <DaisyNav></DaisyNav> */}
      <NavBar></NavBar>
      <div className="stats shadow"> 
        <div className="stat">
          <div className="stat-title">Total Page Views</div>
          <div className="stat-value">89,400</div>
          <div className="stat-desc">21% more than last month</div>
        </div>
      </div>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </div>
  )
}

export default App
