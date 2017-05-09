import React, {Component} from 'react';
import CommentList from './CommentList'



export default class Article extends Component {

  // метод constructor() в нем задается начальный state
  // есть более простой способю см. ниже
  // constructor() {
  //   super()
  //   this.state = {
  //     isOpen: false
  //   }
  // }
  state = {
    isOpen: false
  }
//основной метод класса - render()
  //только пропсы живут не в аргументе а в this.props
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
  // метод toggleOpen будем вызывать по клику на заголовок
  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}


// // фанкшенал/стейтлесс компонент
// export default function Article(props) {
//   //деструктурируем article из объекта props
//   //вместо const article = props.article
//   //используем деструктуризацию объекта
//   const {article} = props;
//   //возвращаем компонент
//   return (
//     <section>
//       <h2>
//         {article.title}
//       </h2>
//       <div>
//         {article.text}
//       </div>
//     </section>
//   );
// }