import {Games} from "../components/Games";
import {collection} from 'firebase/firestore';
import {useCollectionData} from 'react-firebase-hooks/firestore';
import {firestoreDB} from "../services/firebase";
import {Form} from "react-bootstrap";
import {useState} from "react";


export function GamesPage() {
    const query = collection(firestoreDB, 'games').withConverter(converter);
    const [values, loading, error] = useCollectionData(query);
    const [search, setSearch] = useState("");
    console.log({values, loading, error});
    return (
        <>
            <h1>Games</h1>
            <Form>
                <Form.Label>search</Form.Label>
                <Form.Control
                    value={search}
                    onChange={e => setSearch(e.target.value)}/>
            </Form>
            <Games games={values?.filter(g => g.name.toLowerCase().includes(search.toLowerCase()))}/>
        </>
    );
}

const converter = {
    toFirestore: undefined,
    fromFirestore : function (snapshot, options) {
        const data = snapshot.data(options);
        return {...data, id: snapshot.id}
    }
}

