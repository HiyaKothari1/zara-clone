export default function Description({ title, price }) {
    return(
        <div className="description">
            <h3>{title}<i className="fa-regular fa-heart"></i></h3>
            <p><i className="fa-solid fa-indian-rupee-sign"></i>{price}</p>
            <button><i className="fa-solid fa-bag-shopping"></i>Buy Now</button>
        </div>
    );
}