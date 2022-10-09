import {Games} from "../components/Games";

export function GamesPage(props) {
    const {games} = props;
    return (
        <>
            <h1>Games</h1>
            <Games games={games}/>
        </>
    );
}