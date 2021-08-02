import "./style.css"

const Footer = () => {
    const date = new Date();
    const Fullyear = date.getFullYear();

    return ( 
        <footer className="footer">
    <p>
        &#169;copyrights are reserved to Mohammed-sahil {Fullyear}
    </p>
        </footer>
     );
}
 

export default Footer;