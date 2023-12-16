
function lesson1() {

  (() => {

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
    ]

    const parents: any = {};

    for (let i =0; i < comments.length; i++) {
      const comment = comments[i];
      const parent = comment.parent;

      // /console.log(i, parent)
      //if (parent !== 0 && !parent) continue;

      // no 
      if (parent !== 0 && !parent) 
        parents[comment.id] = []

      console.log('-', parent)
      if (!parents.hasOwnProperty(parent)) {
        parents[parent] = [];
      }

      parents[parent].push(comment);
    }

    function getChildren(comment: any) {
      if (!comment.parent) return;
      const parent: any[] = parents[comment.parent]; 
      if (parents.hasOwnProperty(child)) return comment;

      console.log(comment);

      return getChildren(comment.children[0]);
    }

    console.log(getChildren(comments[0]))

    console.log(parents);
    
  })//();
;

  (() => {
        // The data
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

    // The function
    function createComments(comments, parent) {
      // Filter the comments that have the given parent id

      // baseCase:
      //==========
      /* 
      when (parent) =: or current comment.id passed in is not a parent to any of the comments inside comments array =: commentsElements = []
      we never enter the for loop and return []
      */
      const filteredComments = comments.filter(
        (comment) => comment.parent === parent
      );
      // Create an empty array to store the comment elements
      const commentElements = [];

      // Loop through the filtered comments

      // get: current.comment.children =: gets topLevel comments only
      for (let comment of filteredComments) {

        // Create a div element with a class of 'comment'
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        // Create a span element with a class of 'body' and set its text content to the comment body

        const commentBody = document.createElement('span');
        commentBody.className = 'body';
        commentBody.textContent = comment.body;
        // Create a span element with a class of 'reply' and set its text content to 'Reply'

        const commentReply = document.createElement('span');
        commentReply.className = 'reply';
        commentReply.textContent = 'Reply';

        // Add an event listener to the reply span that will toggle a form element for adding a reply
        commentReply.addEventListener('click', () => {
          // Get the form element if it exists, or create a new one
          let form = commentDiv.querySelector('form');

          // if: no form to select, create one
          if (!form) {
            form = document.createElement('form');
            // Create an input element for the reply body
            const input = document.createElement('input');
            input.type = 'text';
            input.name = 'body';
            input.placeholder = 'Write a reply...';
            // Create a button element for submitting the reply
            const button = document.createElement('button');
            button.type = 'submit';
            button.textContent = 'Post';

            
            // Add an event listener to the form that will add the reply to the comments array and the DOM
            form.addEventListener('submit', (e) => {
              // Prevent the default form behavior
              e.preventDefault();
              // Get the reply body from the input value
              const replyBody = input.value;
              // Create a new comment object with a unique id, the reply body, and the current comment id as the parent
              const replyComment = {
                id: comments.length,
                body: replyBody,
                parent: comment.id,
              };
              // Push the new comment to the comments array 
              // all comments go into the original array
              comments.push(replyComment);

              // Create a new comment element by calling the function recursively with the new comment as the only element in the array
              const replyElement = createComments([replyComment], comment.id)[0];
              // Append the new comment element to the current comment div

              commentDiv.appendChild(replyElement);
              // Reset the form
              form.reset();
            });

            // Append the input and the button to the form
            form.appendChild(input);
            form.appendChild(button);
          }

          // Toggle the display of the form
          form.style.display = form.style.display === 'none' ? 'block' : 'none';
          // Append the form to the comment div
          commentDiv.appendChild(form);
        });
        
        // Append the body and the reply to the comment div
        commentDiv.appendChild(commentBody);
        commentDiv.appendChild(commentReply);

        // Call the function recursively for the current comment, passing the comments array and the comment id

        // comment.parent = null =: topLevel comment 
        // then we get an array of topLevel.children -: and we call the function for each
        // child again.

        // this gets nested comments for each topLevel comment
        const nestedComments = createComments(comments, comment.id);
        // Append the nested comments to the comment div
        for (let nestedComment of nestedComments) {
          commentDiv.appendChild(nestedComment);
        }
        // Push the comment div to the comment elements array
        commentElements.push(commentDiv);
      }
      // Return the comment elements array
      return commentElements;
    }

    // Get the comment container element
    const commentContainer = document.getElementById('comment-container');
    // Call the function for the top-level comments (parent = null) and append them to the comment container
    const topLevelComments = createComments(comments, null);
    for (let topLevelComment of topLevelComments) {
      commentContainer.appendChild(topLevelComment);
    }
  })();
}

export function nestedComments() {
  lesson1();
}