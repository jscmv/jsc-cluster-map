import styles from "../styles/Home.module.css"
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import { useWindowSize } from "../utils/size";


const Home = (props) => {
  const size = useWindowSize();
  const router = useRouter();
  const [state, setState] = useState({
    allAtolls: [],
    width: 0,
  });

  const shareData = {
    title: 'Cluster Map | Judicial Service Commission',
    text: 'Maldives Judicial Cluster Chart',
    url: 'https://jsc.gov.mv/cluster-map'
  }

  const share = () =>{
       navigator.share(shareData)
  }

  const updateAtoll = (atoll) => {
    const atolo = state.allAtolls[atoll];
    setState({ ...state, selectedAtoll: atolo });
    router.push(`/${atoll}`);
  };

  return (
    <div>
       <Head>
        <title>{props.pageHeader.title}</title>
        {props.pageHeader.metas.map((attributes, index) => (
          <meta {...attributes} key={index} />
        ))}
      </Head>

      <div className="container pb-3 mt-3">
        <div className="row">
          {size.width > 768 ? <Map updateAtoll={updateAtoll}></Map> : <></>}

          <div className="col-lg-8">
            <div className="row mb-5">
              <div className="col-lg-6">
                <h5 className="post-cat mt-2">ކްލަސްޓާރ ޗާޓު /</h5>
                <h1 className={styles.heading}>ޖުޑީޝަލް ދާއިރާތަކުގެ ޗާޓު</h1>
                <h4 className="mb-5">2023 ވަނަ އަހަރުގެ ތަފާސް ހިސާބު</h4>
                

                <div className="row mb-3">
                  <div className="col ">
                    <div className="col">
                      <h5>20</h5>
                    </div>
                    <div className="col">
                      <h6>އަތޮޅު</h6>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col">
                      <h5>55</h5>
                    </div>
                    <div className="col">
                      <h6>ކްލަސްޓާރ</h6>
                    </div>
                  </div>
                  <div className="col">
                    <div className="col">
                      <h5>184</h5>
                    </div>
                    <div className="col">
                      <h6>ފަނޑިޔާރުން</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
          

  
            <div className={styles.sharee+ ' mt-2 py-2 row'}>
              <div  className="col">SHARE    | 
              <a rel="noreferrer"  target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://jsc.gov.mv/cluster-map"><i className="fa fa-facebook"></i></a>
              <a rel="noreferrer"  target="_blank"  href={`https://twitter.com/intent/tweet?text=Maldives Judicial Clusters Chart via @maldivesjsc &url=https://jsc.gov.mv/cluster-map`} ><i className="fa fa-twitter"></i></a> 
              <a rel="noreferrer"  onClick={share} ><i className="fa fa-share"></i></a>
              </div>
              <div className="col updatedat">Updated at: 17 March 2024</div>
            </div>
            </div>
          </div>
          {size.width < 768 ? <Map updateAtoll={updateAtoll}></Map> : <></>}
        </div>
      </div>
    </div>
  );
};



export async function getStaticProps() {
  return {
    props: {
     
      pageHeader: {
        title: "ޖުޑީޝަލް ދާއިރާތަކުގެ ޗާޓު",
        metas: [
          {
            property: "og:title",
            content: `ޖުޑީޝަލް ދާއިރާތަކުގެ ޗާޓު`,
          },
          {
            property: "og:image",
            content: `https://jsc.gov.mv/cluster-map/img/main.png`,
          },
          {
            property: "og:type",
            content: `article`,
          },

          {
            name: "twitter:title",
            content: `ޖުޑީޝަލް ދާއިރާތަކުގެ ޗާޓު`,
          },
          {
            name: "twitter:image:src",
            content: `https://jsc.gov.mv/cluster-map/img/main.png`,
          },
          {
            name: "twitter:card",
            content: `summary_large_image`,
          },
        ],
      },
    },
  };
}

export default Home;
