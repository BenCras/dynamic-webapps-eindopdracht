import PropTypes from "prop-types";
import {MyCard} from "./MyCard";
import {Row, Col, Button} from "react-bootstrap"
import {ItemPage} from "../pages/ItemPage";
import {MdEdit, MdDelete} from "react-icons/md";

function OptionButton(props) {
    const {onClick, children} = props;
    return (
        <Button variant="outline-primary" size="sm" className="m-1 mb-0"
                onClick={onClick}>
            {children}
        </Button>
    );
}

// export function Items(props) {
//     const {items} = props;
//     return (
//         <Row>
//             {items !== undefined ? items.map((i) => <Item key={i.id} item={i}/>) : null}
//         </Row>
//     );
// }
export function Items(props) {
    const {items, onDeleteItem, onEditItem} = props;
    return (
        <Row>
            {items?.map(i =>
                <Item key={i.id}
                        item={i}
                        onDeleteItem={onDeleteItem}
                        onEditItem={onEditItem}
                />)}
        </Row>
    );
}

Items.propTypes = {
    games: PropTypes.array,
}

// function Item(props) {
//     const {item} = props;
//     return (
//         <Col lg={3}>
//             <MyCard title={item.name} onClick={() => <ItemPage item={item}/>}>
//                 {item.price}
//             </MyCard>
//         </Col>
//     )
// }
function Item(props) {
    const {item, onDeleteItem, onEditItem} = props;
    return (
        <Col lg={3}>
            <MyCard title={item.name} onClick={() => <ItemPage item={item}/>}>
                {item.price}
                {(onDeleteItem || onEditItem) &&
                <div className="border-top mt-1 pt-1">
                    <OptionButton onClick={() => onDeleteItem(item)}><MdDelete/></OptionButton>
                    <OptionButton onClick={() => onEditItem(item)}><MdEdit/></OptionButton>
                </div>
                }
            </MyCard>
        </Col>
    );
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
