import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Row, Col} from "react-bootstrap"


export function Items(props) {
    const {items} = props;
    return (
        <Row>
            {items !== undefined ? items.map((i) => <Item key={i.id} item={i}/>) : null}
        </Row>
    );
}

Items.propTypes = {
    games: PropTypes.array,
}

function Item(props) {
    const {item} = props;
    return (
        <Col lg={3}>
            <MyCard title={item.name}>
                {item.price}
            </MyCard>
        </Col>
    )
}

Item.propTypes = {
    game: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        clicked: PropTypes.bool,
    })
}
