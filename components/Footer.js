
const Footer = () =>{
return(

    <section id="footer" className="footer-bg">
    <div className="container pt-5 px-5 pb-5 footer-a">
    <div className="row text-xs-center text-sm-left text-md-left">
        <div className="col-xs-12 col-sm-4 col-md-4 d-none d-lg-block">
        <h5>ތަފްޞީލު</h5>
        <ul className="list-unstyled quick-links">
            <li><a href="https://jsc.gov.mv/commission/" className="text-decoration-none">ކޮމިޝަން</a></li>
            <li><a href="https://jsc.gov.mv/works/" className="text-decoration-none">މަސައްކަތްތައް</a></li>
            <li><a href="https://jsc.gov.mv/members/" className="text-decoration-none">މެންބަރުން</a></li>
        </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 d-none d-lg-block">
        <h5>އަވަސް ލިންކު</h5>
        <ul className="list-unstyled quick-links">
            <li><a href="https://jsc.gov.mv/contact/" className="text-decoration-none">ގުޅުއްވުމަށް</a></li>
            <li><a href="https://jsc.gov.mv/faq/" className="text-decoration-none">އާންމު ސުވާލުތައް</a></li>
            <li><a href="https://jsc.gov.mv/media/announcement/" className="text-decoration-none">އިޢުލާން</a></li>
        </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
        <h5>އެޑްރެސް</h5>
        <ul className="list-unstyled quick-links">
            <li><a  className="text-decoration-none"><i className="fa fa fa-map-marker" /> ހ.ސަކީނާމަންޒިލް، މާލެ، ދިވެހިރާއްޖެ </a></li>
            <li><a href="mailto:admin@jsc.gov.mv" className="text-decoration-none font-sans"><i className="fa fa-envelope-o" /> admin@jsc.gov.mv</a></li>
            <li><a className="text-decoration-none font-sans"><i className="fa fa-phone" /> <span dir="ltr">(+960) 3303501</span></a></li>
        </ul>
        </div>
    </div>
    </div>
    <div className="footer-b">
   
    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-3">
        <ul className="list-unstyled list-inline social text-center" style={{marginBottom: '5px'}}>
       
        <li className="list-inline-item"><a href="https://facebook.com/maldivesjsc"><i className="fa fa-facebook" /></a></li>
      
        <li className="list-inline-item"><a href="https://twitter.com/maldivesjsc"><i className="fa fa-twitter" /></a></li>

        <li className="list-inline-item"><a href="https://instagram.com/maldivesjsc"><i className="fa fa-instagram" /></a></li>
        
        </ul>
        <p className="text-center font-sans">Judicial Service Commission © <span className="rubik-font">2022</span></p>
    </div>
    </div>	
    </section>
)

}

export default Footer