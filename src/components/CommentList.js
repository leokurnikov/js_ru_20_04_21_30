import React from 'react'
import Comment from './Comment'
import PropTypes from 'prop-types'
import toggleOpen from '../decorators/toggleOpen'

function CommentList(props) {
    const {isOpen, toggleOpen} = props
    const linkText = isOpen ? 'hide comments' : 'show comments'

    return (
        <div>
            <a href="#" onClick={toggleOpen}>{linkText}</a>
            {getBody(props)}
        </div>
    )
}

function getBody({isOpen, comments = []}) {
    if (!isOpen) return null
    if (!comments.length) return <p>No comments yet</p>
    return (
        <ul>
            {comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)}
        </ul>
    )
}

CommentList.propTypes = {
  comments: PropTypes.array
}

export default toggleOpen(CommentList)