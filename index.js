const element = (
  <div className="bg">
    <h1 className="heading">Congratulations</h1>
    <div className="card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image"
      />
      <h1 className="cardHeading">Kiran V</h1>
      <p className="paragraph">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image1"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
