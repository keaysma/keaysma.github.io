import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/me.jpeg';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Interests', href: 'interests' },
        { content: 'Awards', href: 'awards' },
        // { content: 'My Resume', href: 'resume' },
      ],
      isCollapsed: true
    };
  }

  render() {
    const tabs = this.state.tabs;

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-block d-lg-none">
            {config.firstName} {config.lastName}
          </span>
          <span className="d-none d-lg-block">
            <img
              className="img-fluid img-profile rounded-circle mx-auto mb-2"
              src={avatar}
              alt=""
            />
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => this.setState({isCollapsed : !this.state.isCollapsed})}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${this.state.isCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarSupportedContent">
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li 
                  className="nav-item" 
                  key={href}
                  onClick={() => this.setState({isCollapsed : true})}
                >
                  <Scroll type="id" element={href}>
                    <a className="nav-link" href={`#${href}`} >
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}

            <li className="nav-item" key="resume">
              <a className="nav-link" href="https://www.dropbox.com/s/n1oaw3f66524c7k/Resume.pdf">
                My Resume
              </a>
            </li>
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
