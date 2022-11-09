import {Items} from "../components/Items";
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from "../services/firebase";
import {Container, Form, Row, Col} from "react-bootstrap";
import {useState} from "react";
import {ShoppingCart} from "../components/ShoppingCart";


export function ItemsPage(props) {
    const query = collection(firestoreDB, 'items').withConverter(converter);
    const [values, loading, error] = useCollectionData(query);
    const [search, setSearch] = useState("");
    const [platform, setPlatform] = useState("");
    const [shoppingCart, setShoppingCart] = useState([]);

    const {type} = props;
    console.log({values, loading, error});
    return (
        <>
            <Container>
                <Row style={{margin: 15, textAlign: "center"}}>
                    <Form>
                        <Form.Label>search</Form.Label>
                        <Form.Control
                            style={{width: "400px", display: "inline", margin: "0 5px"}}
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                    </Form>
                </Row>
                <Row>
                    <Col lg={2}>
                        <Row>
                        <Form>
                            <Form.Check style={{display: "block"}}
                                inline checked={platform === "Steam"}
                                label="Steam"
                                name="type"
                                type="checkbox"
                                id="Steam"
                                onChange={() => setPlatform("Steam")}
                            />
                            <Form.Check style={{display: "block"}}
                                inline checked={platform === "Origin"}
                                label="Origin"
                                name="type"
                                type="checkbox"
                                id="Origin"
                                onChange={() => setPlatform("Origin")}
                            />
                            <br/>
                        </Form>
                        </Row>
                        <Row>
                            <ShoppingCart items={shoppingCart}/>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <Items items={values?.filter(g =>
                                (type !== "all" ? g.type === type : true) &&
                                g.name.toLowerCase().includes(search.toLowerCase()))}
                                   addToCart={a => setShoppingCart([...shoppingCart, a])}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const converter = { //todo lookup purpose
    toFirestore: undefined,
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}

