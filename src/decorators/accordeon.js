import React, {Component as ReactComponent} from 'react'

//DecoratedComponent я называл чтоб легче понять было. Лучше выбирай более значущее название
export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
  constructor(props) {
    super()
    this.state = {
        //Не привязывайся к названиям сущностей, вся суть декораторов в универсальности. Сделай openItemId
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
