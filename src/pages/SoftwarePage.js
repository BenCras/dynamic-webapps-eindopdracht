import {Software} from "../components/Software";

export function SoftwarePage(props) {
    const {software} = props;
    return (
        <>
            <h1>Software</h1>
            <Software software={software}/>
        </>
    );
}