import Description from "./description";

export default function Card({ imgSrc, title, price }) {
    return (
        <div className="card">
            <img src={imgSrc} alt="Product Image"/>
            <Description title={title} price={price} />
        </div>
    );
}
