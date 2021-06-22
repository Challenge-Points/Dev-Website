import MapLeaderboard from "../../components/MapLeaderboard";
import MapViewer from "../../components/MapViewer"
import { useRouter } from 'next/router'
//import ClipboardJS from 'clipboard'

function bsrClipboard() {
    var bsr = router.query.key
    bsr.execCommand("copy");
    alert("Copied bsr")
}
/*
async function getMapInfo(router) { 
    if(router.isReady) {
        var res = await fetch(`https://challenge-points-dev.herokuapp.com/api/maps/hash/${router.query.hash}`);
        var data = await res.json();
    }
    return {
        props: { data }
    }
};*/

const Map = (props) => {
    const router = useRouter();
    //var props = getMapInfo(router);
    //props.data.then((map) => console.log(map));
    //var clipboard = new ClipboardJS('.btn');
    return (
        <div>
            <div>
                <h1>{router.query?.name}</h1>
                <h4>by {router.query?.mapper}</h4>
                <div>
                    <clipboard />
                    <button title="Copy !bsr" className="btn">!</button>
                    <a href={`https://beatsaver.com/beatmap/${router.query?.key}`} target="_blank">
                    <button title="Beatsaver Link" className="btn">
                        <img src="/icons/BeatSaverLogo.png" className="btn_icon"/>
                    </button>
                    </a>
                </div>
                <MapLeaderboard hash={router.query?.hash}/>
                <MapViewer id={router.query?.key} diff={router.query?.diff} mode={router.query?.mode}/>
            </div>
        </div>
    );
};
 
export default Map;