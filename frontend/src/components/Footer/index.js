import './Footer.css';

const Footer = () => {

  const handleClick = () => window.scroll({top: 0, left: 0, behavior: 'smooth'});

  return (
    <div className='footer'>
      <strong style={{cursor: 'pointer'}} onClick={handleClick}>Top</strong>
      <AboutLink link='https://github.com/mdepree5' image='https://monopolynb.s3.amazonaws.com/github-original-wordmark.svg' />
      <AboutLink style={{height:'4em', width:'4em'}} link='https://www.linkedin.com/in/mitch-depree-4a5686155/' image='https://monopolynb.s3.amazonaws.com/linkedin-plain-wordmark.svg' />
    </div>
  )
}

const AboutLink = ({style, link, image}) => (
  <img style={style} className='about' onClick={()=>window.open(link)} src={image} alt='about-link' />
)

export default Footer;