import React, { Component } from 'react';
import Link from 'next/link'

class Nav extends Component {

  componentDidMount() {
    initSideNav();
  }

  render() {
    return (
      <header className={this.props.headerType}>
        <div>
          <nav className="main-nav search-nav">
            <div className="nav-wrapper">
              <a className="fus-branding" href="https://www.franciscan.edu" title="Franciscan University of Steubenville">Franciscan University of Steubenville</a>
              <Link href="/"><a className="brand-logo"><img src="/static/img/ci-logo.png"/></a></Link>
              <a href="#" data-activates="mobile-demo" className="button-collapse">
                <svg viewBox="0 0 24 24" fill="#fff" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <ul className="side-nav" id="mobile-demo" style={{width: '300px'}}>
          <li className="logo">
            <Link href="/"><a className="brand-logo"><img src="/static/img/ci-logo.png"/></a></Link>
          </li>
          <li> <Link href="/about"><a>About</a></Link> </li>
          <li> <Link href="/team"><a>Team</a></Link> </li>
          <li> <Link href="/courses"><a>Courses</a></Link> </li>
          <li> <Link href="/events"><a>Events</a></Link> </li>
          <li> <Link href="/resources"><a>Resources</a></Link> </li>
          <li> <Link href="/news"><a>News</a></Link> </li>
            </ul>
            <style jsx>{`
                .side-nav .logo {
                  height: 100px;
                  background-color: #000;
                  border-bottom: 2px solid #8e1b21;
                  text-align: center;
                }

                .side-nav .logo a:hover {
                  background-color: #000;
                }

                .side-nav .logo img {
                  width: auto;
                  height: 80px;
                }
                  `}</style>
      </header>
    );
  }
}

export default Nav;
