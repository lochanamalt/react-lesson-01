import Main from "./Main";
import SidePane from "./SidePane";

function Content(props: any) {
    return (
        <div className={props.darkMode ? "body-content dark" : "body-content"}>
            <Main/>
            <SidePane darkMode={props.darkMode}/>
        </div>
    )
}

export default Content;