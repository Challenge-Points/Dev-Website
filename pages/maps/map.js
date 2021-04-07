import MapLeaderboard from "../../components/MapLeaderboard";
import MapViewer from "../../components/MapViewer"
import { useRouter } from 'next/router'

const Map = () => {
    const router = useRouter();
    return ( 
        <div>
            <h4><h1>{router.query.name}</h1>by {router.query.mapper}</h4>
            <MapLeaderboard hash={router.query.hash}/>
            <MapViewer id={router.query.key} diff={router.query.diff} mode={router.query.mode}/>
        </div>
     );
}
 
export default Map;