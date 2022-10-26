import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Container, Row} from "react-bootstrap";


export function Software(props) {
    const {software} = props;
    return (
        <Container>
            {software.map((s, i) => <SingleSoftware key={i} singleSoftware={s} />)}
        </Container>
    );
}

Software.propTypes = {
    software: PropTypes.array.isRequired,
}

function SingleSoftware(props) {
    const {singleSoftware} = props;
    return (
        <Row xs={6} sm={4} md={3} lg={2} >
            <MyCard title={singleSoftware.name} >
                <div>{singleSoftware.price}</div>
                <div style={{display: singleSoftware.clicked ? "block" : "none"}}>{singleSoftware.code}</div>
            </MyCard>
        </Row>
    )
}

SingleSoftware.propTypes = {
    singleSoftware: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        code: PropTypes.string.isRequired,
        clicked: PropTypes.bool,
    })
}
