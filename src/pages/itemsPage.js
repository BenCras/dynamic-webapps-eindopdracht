import {Items} from "../components/Items";
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from "../services/firebase";
import {Container, Form, Row, Col} from "react-bootstrap";
import {useState} from "react";
import {ShoppingCart} from "../components/ShoppingCart";

const initialList = [
    {id: 1, title: "Steam", seen: false},
    {id: 2, title: "Origin", seen: false},
];

export function ItemsPage(props) {
    const query = collection(firestoreDB, 'items').withConverter(converter);
    const [values, loading, error] = useCollectionData(query);
    const [search, setSearch] = useState("");
    const [platforms, setPlatforms] = useState(initialList);
    const [shoppingCart, setShoppingCart] = useState([]);

    function PrintPlatforms({platforms}) {
        return (platforms.map(p => (
            <Form.Check style={{display: "block"}}
                        checked={p.seen}
                        label={p.title}
                        name="type"
                        type="checkbox"
                        id="game"
                        onChange={() => setPlatforms(platforms.map(s => s.id === p.id ? {...s, seen: !p.seen} : s))}
            />
        )));
    }

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
                            <PrintPlatforms
                                platforms={platforms}
                            />
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
                                (platforms.filter(p => p.seen).length !== 0 ? platforms.filter(p => p.seen).map(p => p.title).includes(g.platform) : true) &&
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

