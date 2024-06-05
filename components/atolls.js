import HA from './SVGMaps/HA.svg'
import HDH from './SVGMaps/HDH.svg'
import SH from './SVGMaps/SH.svg'
import N from './SVGMaps/N.svg'
import R from './SVGMaps/R.svg'
import B from './SVGMaps/B.svg'
import LH from './SVGMaps/LH.svg'
import K from './SVGMaps/K.svg'
import AA from './SVGMaps/AA.svg'
import ADH from './SVGMaps/ADH.svg'
import V from './SVGMaps/V.svg'
import M from './SVGMaps/M.svg'
import F from './SVGMaps/F.svg'
import DH from './SVGMaps/DH.svg'
import TH from './SVGMaps/TH.svg'
import L from './SVGMaps/L.svg'
import GA from './SVGMaps/GA.svg'
import GDH from './SVGMaps/GDH.svg'
import GN from './SVGMaps/GN.svg'
import S from './SVGMaps/S.svg'


const ato = {
    'HA': HA,
    'HDH': HDH,
    'SH': SH,
    'N': N,
    'R': R,
    'B': B,
    'LH': LH,
    'K': K,
    'AA': AA,
    'ADH': ADH,
    'V': V,
    'M': M,
    'F': F,
    'DH': DH,
    'TH': TH,
    'L': L,
    'GA': GA,
    'GDH': GDH,
    'GN': GN,
    'S': S,
}

const atolls = (atoll) =>{
    return(
        ato[atoll]
    )
   
}

export default atolls





