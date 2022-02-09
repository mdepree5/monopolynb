import './Footer.css';

const Footer = () => {

  const handleClick = () => window.scroll(0, 0);

  return (
    <div className='footer'>
      <ul className='footer-links'>
        <li style={{cursor: 'pointer'}} onClick={handleClick}>Top</li>
        <li><a href='https://github.com/mdepree5'>Github</a></li>
        <li><a href='https://www.appacademy.io/'>App Academy</a></li>
      </ul>
    </div>
  )
}

export default Footer;