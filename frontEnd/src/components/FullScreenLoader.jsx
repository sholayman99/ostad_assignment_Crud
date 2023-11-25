/* eslint-disable react/prop-types */
import loader from "../assets/image/loader.svg"
const FullScreenLoader = (props) => {
    return (
        <div className={props.visibility}>
            <div className="ProcessingDiv">
                <div className="center-screen">
                    <img className="loader-size" src={loader}/>
                </div>
            </div>
        </div>
    );
};

export default FullScreenLoader;