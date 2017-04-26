import React from 'react';

export default function Comment({comment=[]}) {

  return (
    <section>
      <div>
        {comment.user}
      </div>
      <div>
        {comment.text}
      </div>
    </section>
  );
}