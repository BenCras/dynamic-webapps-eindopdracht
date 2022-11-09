import {Container} from "react-bootstrap";

export function ItemPage(props) {
    const {item} = props
    return (
        <Container>
            <p>{item.name}</p>
        </Container>
    );
}
