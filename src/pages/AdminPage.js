import {Items} from "../components/Items";
import {addDoc, collection, deleteDoc, orderBy, query} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from "../services/firebase";
import {Container, Form, Row, Col, Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {AiFillMinusSquare} from "react-icons/ai";
import {BiAddToQueue} from "react-icons/bi";
import {MdEdit, MdEditOff} from "react-icons/md";


const initialList = [
    {id: 1, title: "game", seen: false},
    {id: 2, title: "software", seen: false},
    {id: 3, title: "giftcard", seen: false},
];

export function AdminPage(props) {
    const collectionRef = collection(firestoreDB, 'items').withConverter(converter);
    const queryRef = query(collectionRef, orderBy("name"));
    const [values, loading, error] = useCollectionData(queryRef);
    console.log({values, loading, error});
    const [search, setSearch] = useState("");
    const [types, setTypes] = useState(initialList);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const handleShow = () => setOpen(true);
    const [newItem, setNewItem] = useState({});
    const [editMode, setEditMode] = useState(false);

    // CreateTypes();
    // function CreateTypes() { /todo autogenerate filters
    //     new Set(values?.map(i => i.type)).forEach(t => types.push({
    //         id: types.length + 1,
    //         title: t,
    //         seen: false
    //     }))
    // }

    function PrintTypes({types}) {
        return (types.map(t => (
            <Form.Check style={{display: "block"}}
                        checked={t.seen}
                        label={t.title}
                        name="type"
                        type="checkbox"
                        id="game"
                        onChange={() => setTypes(types.map(s => s.id === t.id ? {...s, seen: !t.seen} : s))}
            />
        )));
    }

    async function addItem(item) {
        console.log(item);
        try {
            await addDoc(collectionRef, item);
            console.log("add item done")
        } catch {
            console.log("ERROR add item NOT done")
        }
        handleClose()
        setNewItem({});
    }

    async function deleteItem(item) {
        try {
            await deleteDoc(item.ref);
            console.log(`delete person ${item.name} done`)
        } catch {
            console.log(`ERROR delete person ${item.name} NOT done`)
        }
    }

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
                        <Button style={{margin: 5}} onClick={() => setEditMode(!editMode)}>
                            {editMode ? <MdEditOff/> : <MdEdit/>}
                        </Button>
                        <Button variant="primary" onClick={handleShow}>
                            {open ? <AiFillMinusSquare/> : <BiAddToQueue/>}
                        </Button>
                        <Modal show={!!open} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <h3 className="ms-2">Add Item</h3>
                            </Modal.Header>
                            <div className="m-3 mt-0">
                                <Form>
                                    <Form.Label className="mt-2 ms-1">name:</Form.Label>
                                    <Form.Control
                                        onChange={e => setNewItem({...newItem, name: e.target.value})}/>
                                    <Form.Label className="mt-2 ms-1">price:</Form.Label>
                                    <Form.Control
                                        onChange={e => setNewItem({...newItem, price: Number(e.target.value)})}/>
                                    <Form.Label className="mt-2 ms-1">code:</Form.Label>
                                    <Form.Control
                                        onChange={e => setNewItem({...newItem, code: e.target.value})}/>
                                    <Form.Label className="mt-2 ms-1">platform:</Form.Label>
                                    <Form.Control
                                        onChange={e => setNewItem({...newItem, platform: e.target.value})}/>
                                    <Form.Label className="mt-2 ms-1">seller:</Form.Label>
                                    <Form.Control
                                        onChange={e => setNewItem({...newItem, seller: e.target.value})}/>
                                    <Form.Label className="mt-2 ms-1">type:</Form.Label>
                                    <Form.Control
                                        onChange={e => setNewItem({...newItem, type: e.target.value})}/>
                                </Form>
                                <div className="d-flex justify-content-center p-2">
                                    <Button className="m-1" size="lg" onClick={() => handleClose()}>cancel</Button>
                                    <Button className="m-1" size="lg" onClick={async () => {
                                        if (await addItem(newItem)) handleClose();
                                    }}>save</Button>
                                </div>
                            </div>
                        </Modal>
                    </Form>
                </Row>
                <Row>
                    <Col lg={2}>
                        <Form>
                            <PrintTypes
                                types={types}
                            />
                        </Form>
                    </Col>
                    <Col>
                        <Row>
                            <Items items={values?.filter(g =>
                                (types.filter(t => t.seen).length !== 0 ? types.filter(t => t.seen).map(t => t.title).includes(g.type) : true) &&
                                g.name.toLowerCase().includes(search.toLowerCase()))}
                                   isInitiallyOpen={true}
                                   onDeleteItem={editMode && deleteItem}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

const converter = {
    toFirestore: function (dataInApp) {
        return {
            name: dataInApp.name,
            price: Number(dataInApp.price),
            code: dataInApp.code,
            platform: dataInApp.platform,
            seller: dataInApp.seller,
            type: dataInApp.type,
        };
    },
    fromFirestore: function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id, ref: snapshot.ref}
    }
};

