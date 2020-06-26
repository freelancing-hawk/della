import React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import MainPage from "./pages/main-page";

function App() {
  return (
    <div>
      <div className="App page-wrapper chiller-theme toggled">
        <nav id="sidebar" className="sidebar-wrapper">
          <div className="sidebar-content pl-4 pt-3">
            <div id="close-sidebar" class="fa fa-bars fa-2x">
             
            </div>
            {/* <div className="sidebar-brand">
              <a href="#">Della Infotech</a>
            </div>
            <div className="sidebar-header">
              <div className="user-pic">
                <img
                  className="img-responsive rounded-circle"
                  src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                  alt="Jhon"
                />
              </div>
              <div className="user-info">
                <span className="user-name">
                  Jhon <strong>Smith</strong>
                </span>
                <span className="user-role">Administrator</span>
              </div>
            </div> */}
            <div className="sidebar-menu mt-5">
              <ul>
                <li className="sidebar">
                  <a href="#">
                    {/* <i className="fab fa-aws"></i> */}
                    <span>AWS</span>
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-microsoft"></i> */}
                    <span>Azure</span>
                  </a>
                  <a href="#">
                    {/* <i className="fab fa-google"></i> */}
                    <span>Goolge Cloud</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="sidebar-footer">
            <a href="#">
              <i className="fa fa-bell"></i>
            Logout
          </a>
          </div> */}
        </nav>
        <main className="page-content">

          <MainPage />
        </main>
      </div>

    </div>
  );
}

export default App;
