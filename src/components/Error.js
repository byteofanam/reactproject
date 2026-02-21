import { useRouteError } from "react-router-dom";
const Error =()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error-container">
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but an error occurred while loading the page. Please try again later.</p>
            <p>Error Details :{err.status}</p>
            <p>Status: {err.statusText}</p>
        </div>
    )
}
export default Error;