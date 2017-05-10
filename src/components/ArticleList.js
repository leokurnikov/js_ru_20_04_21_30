import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import accordeon from '../decorators/accordeon'

class ArticleList extends Component {
    // state = {
    //     openArticleId: null
    // }

    render() {
        const {articles, toggleArticle} = this.props
        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id == this.props.openArticleId}
                     toggleOpen={this.props.toggleArticle(article.id)}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }

    // toggleArticle = openArticleId => ev => {
    //     this.setState({openArticleId})
    // }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default accordeon(ArticleList)

// export default ArticleList