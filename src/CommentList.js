import React, {Component} from 'react';
import Comment from './Comment';

export default class CommentList extends Component {
  state = {
    isOpen: false
  }
  render() {
    const elements = this.props.comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>);
    return (
      <section>
        <h5 onClick={this.toggleOpen}>
          {/*нужно менять*/}
          Open/Close
        </h5>
        <div>
          {
            this.state.isOpen &&
            <ul>
              {elements}
            </ul>
          }
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

//не реализована обработка случая когда нет массива комментов
//не меняется текс Открыть/Закрыть для комментов


