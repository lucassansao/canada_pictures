import Github from "./img/github.svg";
import Instagram from "./img/instagram.svg";
import Linkedin from "./img/linkedin.svg";
import Styles from './styles/footer.module.scss';

function Footer() {
    return(
        <footer className={Styles.footer}>
            <div className={Styles.footer__icons}>
                <a href="https://github.com/lucassansao" target="_blank" rel="noreferrer"><img src={Github} alt="facebook_icon"/></a>
                <a href="https://www.instagram.com/luucas_sansao/" target="_blank" rel="noreferrer"><img src={Instagram} alt="instagram_icon" /></a>
                <a href="https://www.linkedin.com/in/lucas-sansao-a9879740/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="twitter_icon" /></a>
            </div>
            <p className={Styles.p}>Developed by Lucas Sansao</p>
        </footer>
    )
}
export default Footer