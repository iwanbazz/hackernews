import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ showLoader }) => (
  <Navbar style={{ backgroundColor: ' #ff6600' }}>
    <Navbar.Brand href="#home" style={{ color: '#fff' }}>
      <Link
        to="/"
        style={{ color: '#fff', textDecoration: 'none' }}
        onClick={showLoader}
      >
        <i className="fab fa-hacker-news-square"></i> Hacker News
      </Link>
    </Navbar.Brand>

    <Nav className="ml-auto">
      <a
        href="https://gitlab.com/iwanbazz/hackernews"
        className="source"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <i className="fab fa-gitlab" style={{ fontSize: '20px' }} /> Star
      </a>
    </Nav>
  </Navbar>
)

export default Header
