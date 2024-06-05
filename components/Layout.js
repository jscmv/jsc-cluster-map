import Head from "next/head";
import Footer from "./Footer";
import Nav from './Nav'
import Script from 'next/script'

const Layout = ({children}) => {
  
    return (
        
        <>
        <Head>
                        <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />

                <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
                />
               
       
            </Head>
             
        
        <div>
            
      
            <Nav></Nav>
            {children}
            <Footer></Footer>
            <Script src="https://jsc.gov.mv/js/sticky_nav.js"  strategy="lazyOnload" />
            
          
            

            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"   strategy="lazyOnload"/>
        </div>
        </>
    )
}

export default Layout