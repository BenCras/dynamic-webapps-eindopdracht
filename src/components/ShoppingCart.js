
export function ShoppingCart(props) {
    const {items} = props;
    if (!items.length) return;
    return (
        <div className="m-3">
            <h6>Shopping Cart:</h6>
            <ul>
                {items.map((i, index) => <li key={index}>{i}</li>)}
            </ul>
        </div>
    );
}