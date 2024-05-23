import "./TextBalloon.css";

const TextBalloon = ({ text, image }) => {
  return (
    <div className="flexdiv">
      <div className="image-div">
        <img src={image} alt="First person" className="responsive-image" />
      </div>
      <div className="text-balloon">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default TextBalloon;
