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

export function Items(props) {
    const {items, onDeleteItem, onEditItem, addToCart} = props;
    return (
        <Row>
            {items?.map(i =>
                <Item key={i.id}
                        item={i}
                        onDeleteItem={onDeleteItem}
                        onEditItem={onEditItem}
                        addToCart={addToCart}

                />)}
        </Row>
    );
}

Items.propTypes = {
    games: PropTypes.array,
}

function Item(props) {
    const {item, onDeleteItem, addToCart} = props;
    return (
        <Col lg={3}>
            <MyCard title={item.name} onClick={() => <ItemPage item={item}/>}>
                € {item.price}
                <Button onClick={() => addToCart(item.name)}>Add to Cart</Button>
                {(onDeleteItem || onEditItem) &&
                <div className="border-top mt-1 pt-1">
                    <OptionButton onClick={() => onDeleteItem(item)}><MdDelete/></OptionButton>
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
