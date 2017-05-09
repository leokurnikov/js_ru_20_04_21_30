import React from 'react';

export default function Comment({comment}) {

  return (
    <section>
      <div>
        {comment.text} by <b>{comment.user}</b>
      </div>
    </section>
  );
}
