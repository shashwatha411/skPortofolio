import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navWrap" role="banner">
      <div className="navBar" aria-label="Primary navigation">
        <a className="navLink" href="#experience">
          Experience
        </a>
        <a className="navLink" href="#projects">
          Projects
        </a>
        <a className="navLink navCta" href="#resume">
          Resume
        </a>
      </div>
    </header>
  )
}
