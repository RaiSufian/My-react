const Footer = ()=>{
    const year = new Date().getFullYear();
        return(
        <>
            <div className="footer">

                <p>All Copyright  © 2000-{year} by sufian developers</p>
            </div>
        </>
    )
}
export default Footer;