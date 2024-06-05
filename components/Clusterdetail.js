import ClusterImage from "./Clusterimg";
import styles from "../styles/Clusterdetail.module.css";
import Clusters from "./Clusters";
import { useRouter } from "next/router";

const ClusterDetail = (props) => {
  const router = useRouter();

  const goHome = () => {
    router.push("/");
  };

  const shareData = {
    title: props.data.name,
    text: props.data.name,
    url: `https://jsc.gov.mv/cluster-map/${router.query.id}`,
  };

  const share = () => {
    navigator.share(shareData);
  };

  return (
    <div className="col-lg-8">
      <div className="row mb-2">
        <div className="col-lg-6">
          <h5 onClick={goHome} role="button" className="post-cat mt-2">
            ކްލަސްޓާރ ޗާޓު /
          </h5>
          <h1 className={styles.heading}>{props.data.name}</h1>

          <div className="row mb-3 border-0">
            <div className="col">
              <div className="col">
                <h5>{props.data.totalClusters}</h5>
              </div>
              <div className="col">
                <h6>ކްލަސްޓާރ</h6>
              </div>
            </div>
            <div className="col">
              <div className="col">
                <h5>{props.data.totalCases}</h5>
              </div>
              <div className="col">
                <h6>ޖުމްލަ މައްސަލަ</h6>
              </div>
            </div>
            <div className="col">
              <div className="col">
                <h5>{props.data.finishedCases}</h5>
              </div>
              <div className="col">
                <h6>ނިމުނު އަދަދު</h6>
              </div>
            </div>
          </div>

        </div>

        <ClusterImage
          atoll={props.data.clusterMap}
          data={Object.keys(props.data.clusters)}
        ></ClusterImage>

        <div className="col mt-4">
            <div>
            <div style={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}>
              <span style={{ backgroundColor: "#76ba1b", width: "10px", height: "10px", borderRadius: "50%", marginLeft: "0.5rem" }}></span>
              <h5 style={{ margin: 0 }}>ފަނޑިޔާރުން ތިބި ރަށްތައް</h5>
            </div>

            <div style={{ display: "flex", alignItems: "center", margin: "0.5rem 0" }}>
              <span style={{ backgroundColor: "#fda172", width: "10px", height: "10px", borderRadius: "50%", marginLeft: "0.5rem" }}></span>
              <h5 style={{ margin: 0 }}>ފަނޑިޔާރުން ނެތް ރަށްތައް</h5>
            </div>

            </div>
        </div>

        <div>
          <div className={styles.sharee + " mt-2 py-2 row"}>
            <div className="col">
              SHARE |
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://www.facebook.com/sharer/sharer.php?u=https://jsc.gov.mv/cluster-map/${router.query.id}`}
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                href={`https://twitter.com/intent/tweet?text=${props.data.clusterMap}. Atoll Judicial Cluster via @maldivesjsc &url=https://jsc.gov.mv/cluster-map/${router.query.id}`}
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a onClick={share}>
                <i className="fa fa-share"></i>
              </a>
            </div>

            <div className="col updatedat">Updated at: 17 April 2023</div>
          </div>
        </div>
      </div>

      <Clusters data={props.data.clusters}></Clusters>
    </div>
  );
};
export default ClusterDetail;
