import React from 'react';

class ChildComponent extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onInteract(this.props.id);
  }

  render() {
    const { name, image, status, curling } = this.props;

    return (
      <div style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "12px",
        width: "220px",
        textAlign: "center"
      }}>

        <h2>{name}</h2>

       <img
        key={curling}   
        src={image[curling]}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />


        <p>{status}</p>

        <button onClick={this.handleClick}>
          Feed / Play
        </button>

      </div>
    );
  }
}

export default ChildComponent;
