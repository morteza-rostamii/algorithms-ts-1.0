<!-- 

# big o =: worst case time complexity
# omega =: best case
# theta =: average case

# big o:

input_size
|
|
|------------ time

# the general trend of growth over (time) =: gives a function

# function -: rate of change of curve

# function could be: 
  
  # constant: f(x) = 1
  # linear: f(x) = x or f(x) = 2x
  # Quad: f(x) = x^2
  # logorithmic: f(x) = log(x) =: O(log(n))
    # start fast, decrease over time
    # input grows over time : but maybe half of the rate of the input size.
  # cubic: O(n^3)

  # O(n * log(n))
  # factorial: O(n!) 
 -->











 <!-- 
 
 # nested comments:
 ==

[
  {
    id: 0,
  },
  {
    id: 1,
    parent: 0,
  },
  {
    id: 2,
    parent: 0,
  },
  {
    id: 3,
    parent: 1,
  }
]

-------------------------------

0
  1
    3, 4
  2 
5

{
0: [1, 2]
1: [3, 4]
5: []
}

{
  0: {
    children: [
      
      1: {
        children: [
          3: {},
          4: {},
        ]
      }
      2: {}
      
    ]
  },
  5: {}
}

------------------

const comments = {
  0: [1, 2],
  1: [3, 4],
  4: [5],
}

func(c=0) {
  if (c=0 not-in comments) return c;

  for (child in children) {
    return func(child=1)
  }
}

func(c=1) {
  const childs = []
  if (c=1 not-in comments) return c;
  
  for (child in children) {
    childs.push(  3 <- func(child=3) ) 
    
    // next iterate
    childs.push(  3 <- func(child=4) ) 
  }
}

  func(c=3) {
    if (c=3 not-in comments) return c; // 3

    for (child in children) {
      return func(child=3)
    }
  }

  func(c=4) {
    const childs = []
    if (c=4 not-in comments) return c;

    for (child in children) {
      childs.push( 5 <- func(child=3) )
    }

    return childs [5]
  }

    func(c=5) {
    if (c=5 not-in comments) return c; // 5

    for (child in children) {
      return func(child=3)
    }
  }
 
  -->


<!-- 

comment-0
  comment-1
  comment-2
    comment-3
comment-4

what data structure to use in my code, that when i traverse with loop or recursion !! i get a nested structure like above!!

-->




















<!-- 
// Import React and useState hook
import React, { useState } from 'react';

// Define the comments array as a constant
const comments = [
  {
    id: 0,
    body: 'comment-0',
    parent: null,
  },
  {
    id: 1,
    body: 'comment-1',
    parent: 0,
  },
  {
    id: 2,
    body: 'comment-2',
    parent: 0,
  },
  {
    id: 3,
    body: 'comment-3',
    parent: 1,
  },
  {
    id: 4,
    body: 'comment-4',
    parent: null,
  },
];

// Define a custom component for rendering a comment
function Comment({ comment }) {
  // Use useState hook to manage the state of the reply form
  const [showForm, setShowForm] = useState(false);
  const [replyBody, setReplyBody] = useState('');

  // Define a function for handling the form submission
  const handleSubmit = (e) => {
    // Prevent the default form behavior
    e.preventDefault();
    // Create a new comment object with a unique id, the reply body, and the current comment id as the parent
    const replyComment = {
      id: comments.length,
      body: replyBody,
      parent: comment.id,
    };
    // Push the new comment to the comments array
    // all comments go into the original array
    comments.push(replyComment);
    // Reset the reply body and hide the form
    setReplyBody('');
    setShowForm(false);
  };

  // Define a function for rendering the nested comments
  const renderNestedComments = () => {
    // Filter the comments that have the current comment id as the parent
    const nestedComments = comments.filter(
      (nestedComment) => nestedComment.parent === comment.id
    );
    // Return a div element with a class of 'nested-comments' that contains the nested comment elements
    return (
      <div className='nested-comments'>
        {nestedComments.map((nestedComment) => (
          <Comment key={nestedComment.id} comment={nestedComment} />
        ))}
      </div>
    );
  };

  // Return a div element with a class of 'comment' that contains the comment body, the reply button, the reply form, and the nested comments
  return (
    <div className='comment'>
      <span className='body'>{comment.body}</span>
      <span className='reply' onClick={() => setShowForm(!showForm)}>
        Reply
      </span>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            name='body'
            placeholder='Write a reply...'
            value={replyBody}
            onChange={(e) => setReplyBody(e.target.value)}
          />
          <button type='submit'>Post</button>
        </form>
      )}
      {renderNestedComments()}
    </div>
  );
}

// Define a custom component for rendering the comments list
function CommentsList() {
  // Filter the comments that have no parent
  const rootComments = comments.filter((comment) => comment.parent === null);
  // Return a div element with a class of 'comments-list' that contains the root comment elements
  return (
    <div className='comments-list'>
      {rootComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

// Export the CommentsList component
export default CommentsList;


 -->