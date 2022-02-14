import './Footer.css';

const Footer = () => {

  const handleClick = () => window.scroll({top: 0, left: 0, behavior: 'smooth'});

  return (
    <div className='footer-links'>
      <div style={{cursor: 'pointer'}} onClick={handleClick}>Top</div>
      <a href='https://github.com/mdepree5'>Github</a>
      <a href='https://www.appacademy.io/'>App Academy</a>
    </div>
  )
}

export default Footer;