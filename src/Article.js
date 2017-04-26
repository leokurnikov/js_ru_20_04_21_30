import React, {Component} from 'react';
import CommentList from './CommentList'



export default class Article extends Component {
  // constructor() {
  //   super()
  //   this.state = {
  //     isOpen: false
  //   }
  // }
  state = {
    isOpen: false
  }

  render() {
    const {article} = this.props
    return (
      <section>
        <h2 onClick={this.toggleOpen}>
          {article.title}
        </h2>
        {this.getBody()}

      </section>
    )
  }
  getBody() {
    return this.state.isOpen && (
      <div>
        <div>{this.props.article.text}</div>
        <div><CommentList comments={this.props.article.comments}/></div>
      </div>
      )
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}