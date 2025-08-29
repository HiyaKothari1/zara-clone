import Card from "./card";
export default function LeftCard() {
    return (
        <div className="leftcard">
            
            <Card imgSrc="card1.png" title="CONTRAST T-SHIRT" price="2,350.00" />
            <Card imgSrc="card2.png" title="WIDE-LEG JEANS" price="5,950.00" />
        </div>
    );
}