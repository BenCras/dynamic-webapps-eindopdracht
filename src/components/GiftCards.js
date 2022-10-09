import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Container, Row} from "react-bootstrap";


export function GiftCards(props) {
    const {giftCards} = props;
    return (
        <Container>
            {giftCards.map((g, i) => <GiftCard key={i} game={g} />)}
        </Container>
    );
}

GiftCards.propTypes = {
    giftCards: PropTypes.array.isRequired,
}

function GiftCard(props) {
    const {giftCard} = props;
    return (
        <Row xs={6} sm={4} md={3} lg={2} >
            <MyCard title={giftCard.name} >
                <div>{giftCard.price}</div>
                <div style={{display: giftCard.clicked ? "block" : "none"}}>{giftCard.code}</div>
            </MyCard>
        </Row>
    )
}

GiftCard.propTypes = {
    giftCard: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
        clicked: PropTypes.bool,
    })
}
