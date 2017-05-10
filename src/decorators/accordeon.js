import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
  constructor(props) {
    super()
    this.state = {
      openArticleId: null
    }
  }

  render() {
    return <OriginalComponent {...this.props} openArticleId={this.state.openArticleId} toggleArticle={this.toggleArticle}/>
  }

  toggleArticle = openArticleId => ev => {
    this.setState({openArticleId})
  }
}
