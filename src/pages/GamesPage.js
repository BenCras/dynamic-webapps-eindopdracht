import {Games} from "../components/Games";

export function GamesPage(props) {
    const {games} = props;
    return (
        <Games games={games}/>
    );
}