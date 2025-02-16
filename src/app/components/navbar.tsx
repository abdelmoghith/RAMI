import "../css/style.css"

export default function Navbar() {
    return (
        <div className="nabvar">
        <div className="dropmenu">
          <div className="nabvar2">
            <div className="top">
              <div className="i_with">
                <i className="fa-solid fa-bars"></i>
                <h2>Menu</h2>
              </div>
              <div className="i_with">
                <i className="fa-solid fa-xmark"></i>
                <p>one</p>
              </div>
              <div className="i_with">
                <i className="fa-solid fa-xmark"></i>
                <p>two</p>
              </div>
              <div className="i_with">
                <i className="fa-solid fa-xmark"></i>
                <p>three</p>
              </div>
            </div>
            <div className="down">
              <div className="i_with">
                <i className="fa-brands fa-github"></i>
                <p>Git</p>
              </div>
              <div className="i_with">
                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                <p>Exit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="top" id="main"><i className="fa-solid fa-bars"></i></div>
        <div className="down">
          <i className="fa-brands fa-github"></i>
          <i className="fa-solid fa-arrow-right-from-bracket"></i>
        </div>
      </div>
    );
  }
  