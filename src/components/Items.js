import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Container, Row} from "react-bootstrap";


export function Items(props) {
    const {games} = props;
    return (
        games!==undefined ? <Container>{games.map((g) => <Game key={g.id} game={g} />)}</Container> : null
    );
}

Items.propTypes = {
    games: PropTypes.array,
}

function Game(props) {
    const {game} = props;
    return (
        <Row xs={6} sm={4} md={3} lg={2} >
            <MyCard title={game.name} >
                <div>{game.price}</div>
                <div style={{display: game.clicked ? "block" : "none"}}>{game.code}</div>
            </MyCard>
        </Row>
    )
}

Game.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        clicked: PropTypes.bool,
    })
}
