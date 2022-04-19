import './Footer.css';

const Footer = () => {

  const handleClick = () => window.scroll({top: 0, left: 0, behavior: 'smooth'});

  return (
    <div className='footer'>
      <div style={{cursor: 'pointer'}} onClick={handleClick}>Top</div>
      <AboutLink link='https://github.com/mdepree5' image='https://monopolynb.s3.amazonaws.com/github-original-wordmark.svg' />
      <AboutLink link='https://www.linkedin.com/in/mitch-depree-4a5686155/' image='https://monopolynb.s3.amazonaws.com/linkedin-plain-wordmark.svg' />
    </div>
  )
}

const AboutLink = ({link, image}) => (
<img className='about' onClick={()=>window.open(link)} src={image} alt='about-link' />
)

export default Footer;