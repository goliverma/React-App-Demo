
import './App.css';
import {Home} from './component/Home';
import {Department} from './component/Department';
import {Employee} from './component/Employee';
import {BrowserRouter,Route,NavLink,Routes} from 'react-router-dom';

function App() {
    return ( 
      <BrowserRouter>
        <div className = "App" >
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink className="nav-link" to="/component/home">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/component/employee">Employee</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/component/department">Department</NavLink>
                </li>
              </ul>
            </div>
          </nav> 
          <Routes>
            <Route path="/component/home" element={<Home/>}/>
            <Route path="/component/employee" element={<Employee/>} />
            <Route path="/component/department" element={<Department/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;