import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  state = {
    isOpen: false,
  }
  render() {
    const {comments=[]} = this.props;
    const elements = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);

    let commentsBody = (this.state.isOpen) ? (elements.length > 0 ? (<ul>{elements}</ul>) : (<p>No comments</p>)) : null;
    let linkHeader = this.state.isOpen ? "Close" : "Open";

    return (
      <section>
        <h5 onClick={this.toggleOpen}>
          <a>{linkHeader} comments below</a>
        </h5>
        <div>
          {commentsBody}
        </div>
      </section>
    )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

//DONE... не реализована обработка случая когда нет массива комментов
//не меняется текс Открыть/Закрыть для комментов


