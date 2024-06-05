import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Map from "../components/Map";
import ClusterDetail from "../components/Clusterdetail";
import { useWindowSize } from "../utils/size";

const Dhaaira = (props) => {
  const size = useWindowSize();
  const router = useRouter();

  const fetchapi = async () => {
    let response = await fetch(
      `${process.env.DOMAINSS}/cluster-map/apiv1/${router.query.id}.json`
    );
    response = await response.json();
    setState({ ...state, data: response });
  };
  
  useEffect(() => {
    fetchapi();
  }, [router]);

  useEffect(() => {
    const element = document.getElementsByClassName("atoll-svg");
    for (let i = 0; i < element.length; i++) {
      if (element[i].id !== router.query.id) {
        element[i].classList.remove("clicked");
      }
      if (element[i].id === router.query.id) {
        element[i].classList.add("clicked");
      }
    }
  });

  const [state, setState] = useState({
    data: {
      clusters: {},
    },
    atolls: "",
  });
  const updateAtoll = (atoll) => {
    router.push(`/${atoll}`);
    const element = document.getElementsByClassName("atoll-svg");
    for (let i = 0; i < element.length; i++) {
      if (element[i].id !== atoll) {
        element[i].classList.remove("clicked");
      }
      if (element[i].id === atoll) {
        element[i].classList.add("clicked");
      }
    }
  };

  return (
    <>
      <Head>
        <title>{props.pageHeader.title}</title>
        {props.pageHeader.metas.map((attributes, index) => (
          <meta {...attributes} key={index} />
        ))}
      </Head>

      <div className="container pb-3 mt-3">
        <div className="row">
          {Object.keys(state.data.clusters).map((c) => {
            <div>
              <h1>{state.data.clusters[c]}</h1>
            </div>;
          })}
          {size.width > 768 ? <Map updateAtoll={updateAtoll}></Map> : <></>}

          <ClusterDetail data={state.data}></ClusterDetail>
          {size.width < 768 ? <Map updateAtoll={updateAtoll}></Map> : <></>}
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const dhaairas = {
    "atoll-ha": "ހ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-hdh": "ހދ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-sh": "ށ ޖުޑީޝަލް ދާއިރާ",
    "atoll-n": "ނ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-r": "ރ ޖުޑީޝަލް ދާއިރާ",
    "atoll-b": "ބ ޖުޑީޝަލް ދާއިރާ",
    "atoll-lh": "ޅ ޖުޑީޝަލް ދާއިރާ",
    "atoll-k": "ކ ޖުޑީޝަލް ދާއިރާ",
    "atoll-aa": "އއ ޖުޑީޝަލް ދާއިރާ",
    "atoll-adh": "އދ ޖުޑީޝަލް ދާއިރާ",
    "atoll-v": "ވ ޖުޑީޝަލް ދާއިރާ",
    "atoll-m": "މ ޖުޑީޝަލް ދާއިރާ",
    "atoll-f": "ފ ޖުޑީޝަލް ދާއިރާ",
    "atoll-dh": "ދ ޖުޑީޝަލް ދާއިރާ",
    "atoll-th": "ތ ޖުޑީޝަލް ދާއިރާ",
    "atoll-l": "ލ ޖުޑީޝަލް ދާއިރާ",
    "atoll-ga": "ގއ ޖުޑީޝަލް ދާއިރާ",
    "atoll-gdh": "ގދ ޖުޑީޝަލް ދާއިރާ",
    "atoll-nvn": "ޏ ޖުޑީޝަލް ދާއިރާ",
    "atoll-s": "ސ ޖުޑީޝަލް ދާއިރާ",
  };

  const paths = Object.keys(dhaairas).map((dhaaira) => ({
    params: { id: String(dhaaira), dhaairas },
  }));

  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const dhaairas = {
    "atoll-ha": "ހއ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-hdh": "ހދ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-sh": "ށ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-n": "ނ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-r": "ރ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-b": "ބ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-lh": "ޅ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-k": "ކ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-aa": "އއ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-adh": "އދ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-v": "ވ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-m": "މ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-f": "ފ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-dh": "ދ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-th": "ތ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-l": "ލ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-ga": "ގއ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-gdh": "ގދ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-nvn": "ޏ. ޖުޑީޝަލް ދާއިރާ",
    "atoll-s": "ސ. ޖުޑީޝަލް ދާއިރާ",
  };

  const dhaaira = params.id;

  return {
    props: {
      dhaaira,
      pageHeader: {
        title: dhaairas[params.id],
        metas: [
          {
            property: "og:title",
            content: `${dhaairas[params.id]} | ޖުޑީޝަލް ދާއިރާތަކުގެ ޗާޓު`,
          },
          {
            property: "og:image",
            content: `https://jsc.gov.mv/cluster-map/img/${params.id}.png`,
          },
          {
            property: "og:type",
            content: `article`,
          },

          {
            name: "twitter:title",
            content: `${dhaairas[params.id]} | ޖުޑީޝަލް ދާއިރާތަކުގެ ޗާޓު`,
          },
          {
            name: "twitter:image:src",
            content: `https://jsc.gov.mv/cluster-map/img/${params.id}.png`,
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

export default Dhaaira;
