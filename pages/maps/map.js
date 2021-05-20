import MapLeaderboard from "../../components/MapLeaderboard";
import MapViewer from "../../components/MapViewer"
import { useRouter } from 'next/router'
//import ClipboardJS from 'clipboard'

function bsrClipboard() {
    var bsr = router.query.key
    bsr.execCommand("copy");
    alert("Copied bsr")
}

async function getMapInfo(router) { 
    if(router.isReady) {
        var res = await fetch(`https://challenge-points-dev.herokuapp.com/api/maps/hash/${router.query.hash}`);
        var data = await res.json();
    }
    return {
        props: { data }
    }
};

const Map = () => {
    const router = useRouter();
    var props = getMapInfo(router);
    props.then((map) => console.log(map));
    var data;
    //var clipboard = new ClipboardJS('.btn');
    return (
        <div>
            {props.then((map) => {
            <div>
            <h1>{map.m_n}</h1>
            <h4>by {map.mr_n}</h4>
                <div>
                    <clipboard />
                    <button title="Copy !bsr" className="btn">!</button>
                    <a href={`https://beatsaver.com/beatmap/${map.key}`} target="_blank">
                        <button title="Beatsaver Link" className="btn">
                            <img src="/icons/BeatSaverLogo.png" className="btn_icon"/>
                        </button>
                    </a>
                </div>
                <MapLeaderboard hash={router.query?.hash}/>
                <MapViewer id={map.key} diff={router.query?.diff} mode={router.query?.mode}/>
            </div>
            })}
        </div>
    );
};
 
export default Map;