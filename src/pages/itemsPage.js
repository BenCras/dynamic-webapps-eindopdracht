import {Items} from "../components/Items";
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from "../services/firebase";
import {Container, Form} from "react-bootstrap";
import {useState} from "react";


export function ItemsPage(props) {
    const query = collection(firestoreDB, 'items').withConverter(converter);
    const [values, loading, error] = useCollectionData(query);
    const [search, setSearch] = useState("");
    // const [type, setType] = useState("all");
    const {type} = props;
    console.log({values, loading, error});
    return (
        <>
            <Container>
                <h1>Shop</h1>
                <Form>
                    {/*<Form.Check*/}
                    {/*    inline checked={type === "all"}*/}
                    {/*    label="all"*/}
                    {/*    name="type"*/}
                    {/*    type="radio"*/}
                    {/*    id="all"*/}
                    {/*    onChange={() => setType("all")}*/}
                    {/*/>*/}
                    {/*<Form.Check*/}
                    {/*    inline checked={type === "game"}*/}
                    {/*    label="game"*/}
                    {/*    name="type"*/}
                    {/*    type="radio"*/}
                    {/*    id="game"*/}
                    {/*    onChange={() => setType("game")}*/}
                    {/*/>*/}
                    {/*<Form.Check*/}
                    {/*    inline checked={type === "software"}*/}
                    {/*    label="software"*/}
                    {/*    name="type"*/}
                    {/*    type="radio"*/}
                    {/*    id="software"*/}
                    {/*    onChange={() => setType("software")}*/}
                    {/*/>*/}
                    {/*<Form.Check*/}
                    {/*    inline checked={type === "giftcard"}*/}
                    {/*    label="gift card"*/}
                    {/*    name="type"*/}
                    {/*    type="radio"*/}
                    {/*    id="giftcard"*/}
                    {/*    onChange={() => setType("giftcard")}*/}
                    {/*/>*/}
                    <br/>
                    <Form.Label>search</Form.Label>
                    <Form.Control
                        style={{width: "400px", display: "inline", margin: "0 5px"}}
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                    />
                </Form>
                <Items games={values?.filter(g => (type !== "all" ? g.type === type : true) && g.name.toLowerCase().includes(search.toLowerCase()))}/>
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

