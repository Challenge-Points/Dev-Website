import MapLeaderboard from "../../components/MapLeaderboard";
import MapViewer from "../../components/MapViewer"
import { useRouter } from 'next/router'
import useSWR from "swr";
import Image from 'next/image';
//import ClipboardJS from 'clipboard'

/*function bsrClipboard() {
    var bsr = router.query.key
    bsr.execCommand("copy");
    alert("Copied bsr")
}*/

const Map = () => {
    const router = useRouter();
    const fetcher = (url) => fetch(url).then((r) => r.json());
    //var clipboard = new ClipboardJS('.btn');
    //const { data, error } = useSWR(`https://challenge-points-dev.herokuapp.com/api/maps/hash/${router.query.hash}`, fetcher);     // First API
    const { data, error } = useSWR(`https://challengepointsapi.herokuapp.com/api/maps/hash/${router.query.hash}`, fetcher);         // Second API

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading...</div>;
    
    var diff = router.query.diff;
    if (diff == "expertPlus") {diff = "expert+"}

    var i;
    data.difficulties.map((diffdata) => {
        if (diffdata.d == diff) {i = diffdata.i};
    })

    return (
    <pre>
        <div>
            <div>
                <h1>{data.m_n}</h1>
                <h4>by {data.mr_n}</h4>
                <div>
                    {/*<clipboard />*/}
                    <button title="Copy !bsr" className="btn">!</button>
                    <a href={`https://beatsaver.com/beatmap/${data.key}`}>
                    <button title="Beatsaver Link" className="btn">
                        <Image src="/icons/BeatSaverLogo.png" alt="" height="30" width="30" className="btn_icon" />
                    </button>
                    </a>
                </div>
                <MapLeaderboard hash={router.query.hash} diff={router.query.diff}/>
                <MapViewer id={data.key} diff={i} mode={data.m}/>
            </div>
        </div>
    </pre>
    );
};
 
export default Map;