import React , {useState} from "react";
import "./Sidebar.css"
import { Sidedata } from "./Sidedata";
import Logo from '../../Assets/Images/cl1.jpg';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from "react-icons"

function Sidebar(props) {
  const history = useHistory();
  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
    
      <div className='sidenav'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
        
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <div className="Sidebar">
    <div className="docInfo">
      <img className="docImg mt-5" src={Logo}></img>
      <h2 className="mt-3">Abanoub</h2>
      <hr className="hr mt-5"/>
    </div>
    <div className="links">
          {Sidedata.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.link}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          </div>
          </div>
        </ul>
        
      </nav>
    </IconContext.Provider>
  </>
  );
}
export default Sidebar;
