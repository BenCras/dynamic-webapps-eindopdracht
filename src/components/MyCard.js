import {Card} from "react-bootstrap";

export function MyCard(props) {
    const {title, children} = props;
    return (
        <Card className="m-2 p-2 shadow-sm text-center" >
            <h5>{title}</h5>
            {children}
        </Card>
    )
}