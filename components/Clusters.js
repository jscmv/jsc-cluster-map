import styles from "../styles/Clusters.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Clusters = ({ data }) => {
  const router = useRouter();

  const [clus, setClus] = useState();

  useEffect(() => {
    setClus(data);
  });

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      {clus === undefined ? (
        <h2>s</h2>
      ) : (
        <>
          {Object.keys(clus).map((c, index) => (
            <div key={index} id={`${c}CLUSTER`} className={styles.clusters}>
              <div>
                <div className={styles.clustername}>
                  <div className={styles.clusternamee}>
                    <h5>{c}</h5>
                  </div>
                </div>
                <div className="p-3 ">
                  <div className="row">
                    <div className="col-sm-6">
                      <div>
                        <div className="mb-3 row">
                          <div className="col-8">
                          {clus[c].islands.map((island) => (
                            <h4 key={island.id}>
                              <span style={{ display: "flex", alignItems: "center", margin: "0.2rem 0 0 0.5rem" }}>
                                <span style={{ backgroundColor: island.hasJudge ? "#76ba1b" : "#fda172", width: "10px", height: "10px", borderRadius: "50%", marginLeft: "0.5rem" }}></span>
                                {island.name}
                              </span>
                            </h4>
                          ))}
                          </div>
                          <div className="col-4">
                            <div className={styles.totalinfo + " mb-3"}>
                              <h5>{clus[c].totalCases}</h5>
                              <h6 className={styles.infoss}>ޖުމްލަ މައްސަލަ</h6>
                            </div>
                            <div className={styles.totalinfo + " mb-3"}>
                              <h5>{clus[c].finishedCases}</h5>
                              <h6 className={styles.infoss}>ނިމުނު މައްސަލަ</h6>
                            </div>
                            <div className={styles.totalinfo}>
                              <h5>{clus[c].magistrates}</h5>
                              <h6 className={styles.infoss}>ފަނޑިޔާރުން</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col">
                      <div className={styles.nimunumassala}>
                        <div className="col">
                          <h6 className={styles.infoss}>
                            <i className="fa fa fa-gavel"></i> ފަނޑިޔާރަކަށް
                            ނިސްބަތުން:
                          </h6>
                        </div>
                        <div className="col">
                          <div className="row">
                            <div className="col">
                              <h6>
                                {clus[c].totalCases} / {clus[c].magistrates}
                              </h6>
                            </div>
                            <div className="col">
                              <h6 className={styles.percentage}>
                              {`${clus[c].magistrates !== 0 ? (clus[c].totalCases / clus[c].magistrates).toFixed() : 0}`} މައްސަލަ
                              </h6>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className={styles.progress}>
                              <div
                                className={styles.progressbar}
                                style={{
                                  width: `${
                                    ((
                                      clus[c].totalCases / clus[c].magistrates
                                    ).toFixed() /
                                      clus[c].totalCases) *
                                    100
                                  }%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};
export default Clusters;
