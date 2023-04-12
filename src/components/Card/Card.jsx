import Button from '../Button/Button';
import './Card.css';

function Card(props){


    return(
        <article className="card">
            <div className="card__image">
                <img src={props.image} alt="" />
            </div>
            <div className="card__info">
                <h3>{props.title}</h3>
                <p>{props.detail}</p>
                <div>
                    <Button title='Read more' />
                </div>
            </div>
        </article>
    )


}

export default Card;