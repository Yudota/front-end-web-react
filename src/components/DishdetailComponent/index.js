import React, { Component } from "react";
import { Card, CardText, CardTitle, ListGroupItem } from "reactstrap";
export default class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDish: props.dish,
    };
  }

  renderDish(selectedDish) {
    if (selectedDish) {
      return (
        <Card>
          <CardTitle>{selectedDish.name}</CardTitle>
          <CardText>{selectedDish.description}</CardText>
        </Card>
      );
    } else {
      return <></>;
    }
  }
  render() {
    const comments = this.props.dish.comments.map((comment) => {
      return (
        <ListGroupItem>
          <CardText key={comment.id}>
            <div>{comment.comment}</div>
            <div>
              -- {comment.author}, {comment.date}
            </div>
            <br />
          </CardText>
        </ListGroupItem>
      );
    });
    return (
      <div>
        <h4>Comments</h4>
        {comments}
      </div>
    );
  }
}
