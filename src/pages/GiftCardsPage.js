import {GiftCards} from "../components/GiftCards";

export function GiftCardsPage(props) {
    const {giftCards} = props;
    return (
        <>
            <h1>Gift Cards</h1>
            <GiftCards giftCards={giftCards}/>
        </>
    );
}