import "./Footer.css"
import { Tiktok, Instagram } from "../Icons";

export function Footer() {
    return (
        <footer className="footer" >
            <ul className="footer__ul">
                <li className="footer__item">
                    <a href="https://www.instagram.com/_rakuun_/" target="_blank"><Instagram/> </a>
                </li>
                <li className="footer__item">
                    <a href="https://www.tiktok.com/@eli_cstcc" target="_blank"><Tiktok/> </a>

                </li>
            </ul>
        </footer>
    )
}