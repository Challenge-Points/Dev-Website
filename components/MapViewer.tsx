const MapViewer = (props) => {
    var id = 0
    var diff = 0
    var mode = 0
    id = props.id;
    diff = props.diff;
    mode = props.diff;
    var url = "https://skystudioapps.com/bs-viewer/?id=" + id + "&difficulty=" + diff + "&mode=" + mode;
    return ( 
        <div>
            <iframe src={url} width="960" height="540" scrolling="no" className="center"/>
            <h6 className="center">BSViewer is powered by skystudioapps.com</h6>
        </div>
     );
}
 
export default MapViewer;