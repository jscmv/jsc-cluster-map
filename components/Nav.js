import { useEffect } from "react";
import {stickyNav} from "/utils/sticky-nav"

const Nav = () => {
  useEffect(() => {
    stickyNav()
  }, []);
  
    return (
      <div className="navigation">
        <header>
          <a href="https://jsc.gov.mv/" className="top-banner-jsc">
            <div>
              <div className="banner-top container">
                <div className="banner-top-logo">
                  <img src="https://jsc.gov.mv/images/Logo-new-3.svg" />
                </div>
                <div className="banner-top-text">
                  <h1 className="banner-top-jsc">ޖުޑީޝަލް ސަރވިސް ކޮމިޝަން</h1>
                  <h1 className="banner-top-dhv">ދިވެހިރާއްޖޭގެ ޖުމްހޫރިއްޔާ</h1>
                </div>
              </div>
            </div>
          </a>
          <nav id="navbar_top" className="navbar navbar-expand-lg navbar-dark" style={{}}>
            <div className="container">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <a href="https://jsc.gov.mv/" className="navbar-brand" id="navbar-brand">
                <div className="logo-container-out">
                  <div id="animate" className=" animate__animated animate__slideInDown">
                    <div className="logo-container text-center">
                      <img src="https://jsc.gov.mv/images/Logo-new-3.svg" height="100%" />
                    </div>
                  </div>
                </div>
              </a>
              {/* mobile view search button */}
              <a className="btn d-lg-none d-xl-none mobile-search-btn" href="https://jsc.gov.mv/search/">
                <i className="fa fa-search text-white" aria-hidden="true" />
              </a>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-3 margin-right-cl" href="#" id="navbarDropdown margin-right-cl" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ތަޢާރަފް <i className="fa fa-chevron-down fa-dropdown-arrow text-white" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu border-0 shadow fade-down" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/commission/">ކޮމިޝަނުގެ ތަޢާރަފް</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/members/">މެންބަރުން</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/meetings/members/">ޖަލްސާތަކުގެ ހާޒިރީ</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/works/">މަސައްކަތްތައް</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/media/commission-gavaidh/">ކޮމިޝަންގެ ޤަވާއިދު</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/organization-structure/">އިދާރީ އޮނިގަނޑު</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/informationOfficer/">އިންފޮމޭޝަން އޮފިސަރ</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/whistleblow/">ވިސްލްބްލޯކުރުން</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3 ms-2" href="https://jsc.gov.mv/judges/" tabIndex={-1} aria-disabled="true">ފަނޑިޔާރުން</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3 ms-2" href="https://jsc.gov.mv/media/circular/" tabIndex={-1} aria-disabled="true">ސަރކިއުލަރ</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link px-3 ms-2" href="https://jsc.gov.mv/media/rules/" tabIndex={-1} aria-disabled="true">ގަވާއިދު</a>
                  </li> */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-3 margin-right-cl" href="#" id="navbarDropdown margin-right-cl" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ޤާނޫނާއި ޤަވާއިދު <i className="fa fa-chevron-down fa-dropdown-arrow text-white" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu border-0 shadow fade-down margin-right-cl" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/media/judges-rules/">ފަނޑިޔާރުންނާ ގުޅޭ</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/hingaa-gavaidh/">ހިންގާ ގަވާއިދު</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/muvahzafunge-gavaidh/">މުވައްޒަފުންގެ ގަވާއިދު</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/media/commission-gavaidh/">ގަވާއިދުތައް</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/media/qaanoon/">ޤާނޫނުތައް</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-3 ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ޝަކުވާ <i className="fa fa-chevron-down fa-dropdown-arrow text-white" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu border-0 shadow fade-down ms-3" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/complaint/">ޝަކުވާ ހުށައެޅުން</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle px-3 ms-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      މީޑިއާ <i className="fa fa-chevron-down fa-dropdown-arrow text-white" aria-hidden="true" />
                    </a>
                    <ul className="dropdown-menu border-0 shadow fade-down ms-3" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/media/news/">ޚަބަރު</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/media/announcement/">އިޢުލާން</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/gallery/">ފޮޓޯ ގެލަރީ</a></li>
                      <li><a className="dropdown-item" href="https://jsc.gov.mv/mediakit/">މީޑިއާ ކިޓް</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3 ms-2" href="https://jsc.gov.mv/vacancy/" tabIndex={-1} aria-disabled="true">ވަޒީފާގެ ފުރުސަތު</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3 ms-2" href="https://jsc.gov.mv/downloads/" tabIndex={-1} aria-disabled="true">ޑައުންލޯޑްސް</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3 ms-2" href="https://jsc.gov.mv/cluster-map/" tabIndex={-1} aria-disabled="true">ކްލަސްޓަރ މެޕް</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link px-3 ms-2" href="https://jsc.gov.mv/contact/" tabIndex={-1} aria-disabled="true">ގުޅުއްވާ</a>
                  </li>
                </ul>
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item d-none d-lg-block">
                    <a className="btn ms-4 srch-button" href="https://jsc.gov.mv/search/"><i className="fa fa-search text-white" aria-hidden="true" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    )
}

export default Nav