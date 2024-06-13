import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black', color: 'white', position: 'fixed', bottom: 0, width: '100%', textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '10px 0' }}>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </footer>
    );
}

export default Footer;
