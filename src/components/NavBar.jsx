import { useEffect, useState } from "react";
import { Navbar, Nav, Container, Offcanvas } from "react-bootstrap";
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { US, BR } from 'country-flag-icons/react/3x2'
import { useContext } from "react";
import '../styles/NavBar.css'
import LanguageContext from "../context/LanguageContext";


export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const {isBR, handleChangeLanguage} = useContext(LanguageContext);


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  })


  const updateActiveLink = (value) => {
    setActiveLink(value);
}

  return (
    <Navbar collapseOnSelect expand="lg" className={(scrolled ? "scrolled" : "")}>
      <Container>
        <Navbar.Brand href="/">
          <p>RP</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                    placement="end">
                    <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link
                                    href="#home"
                                    className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                            updateActiveLink('home');
                                            window.location.href = '#home';
                                        }, 400);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Inicio' : 'Home'}
                                </Nav.Link>
                                <Nav.Link href="#skills"
                                    className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                            updateActiveLink('skills');
                                            window.location.href = '#skills';
                                        }, 400);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Habilidades' : 'Skills'}
                                </Nav.Link>
                                <Nav.Link href="#projects"
                                    className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                            updateActiveLink('projects');
                                            window.location.href = '#projects';
                                        }, 400);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Projetos' : 'Projects'}
                                </Nav.Link>
                                <Nav.Link href="#contate-me"
                                    className={activeLink === 'contate-me' ? 'active navbar-link' : 'navbar-link'}
                                    onClick={() => {
                                        setTimeout(() => {
                                            updateActiveLink('contate-me');
                                            window.location.href = '#contate-me';
                                        }, 500);
                                        return false;
                                    }}
                                >
                                    {isBR ? 'Contate-me' : 'Contact'}
                                </Nav.Link>
                            </Nav>
                            <span className="navbar-text">
                                <div className="social-icon">
                                    <a href="https://github.com/Ruan-Portella" target='_blank' rel="noreferrer"><SiGithub className="image" /></a>
                                    <a href="https://www.linkedin.com/in/ruanportella/" target='_blank' rel="noreferrer"><FaLinkedinIn className="image" /></a>
                                    <button className="buttonFlag" onClick={() => handleChangeLanguage(true)}><BR className="image" /></button>
                                    <button className="buttonFlag" onClick={() => handleChangeLanguage(false)}><US className="image" /></button>
                                </div>
                            </span>
                        </Navbar.Collapse>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
      </Container>
    </Navbar>
  )
}