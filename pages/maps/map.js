import MapLeaderboard from "../../components/MapLeaderboard";
import MapViewer from "../../components/MapViewer"
import { useRouter } from 'next/router'

function bsrClipboard() {
    const router = useRouter();
    var bsr = router.query.key
    bsr.execCommand("copy");
    alert("Copied bsr")
}

const Map = () => {
    const router = useRouter();
    return ( 
        <div>
            <h4><h1>{router.query.name}</h1>by {router.query.mapper}</h4>
            <div>
                <button title="Copy !bsr" className="btn">!</button>
                <a href={`https://beatsaver.com/beatmap/${router.query.key}`} target="_blank">
                    <button title="Beatsaver Link" className="btn">
                        <img src="/icons/BeatSaverLogo.png" className="btn_icon"/>
                    </button>
                </a>
            </div>
            <MapLeaderboard hash={router.query.hash}/>
            <MapViewer id={router.query.key} diff={router.query.diff} mode={router.query.mode}/>
        </div>
     );
}
 
export default Map;