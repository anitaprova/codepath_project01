// import "./Card.css";

const Card = (props) => {
  return (
    <td className="Card">
      <div>
        <img src={props.img} />
        <h4>{props.title}</h4>
        <h5>{props.author}</h5>
				<button>Learn More</button>
      </div>
    </td>
  );
};

export default Card;
