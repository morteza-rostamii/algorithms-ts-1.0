
function learnNestedComments() {
  console.log('learn how to implement nested comments!!');


  /* 
  
  l-0: comment-0
    l-1: comment-1
      l-2: comment-2
  l-0: comment-3
  */

  const comments = [
    {
      id: 0,
      body: "comment-0"
    },
    {
      id: 1,
      body: "comment-1",
      parent: 0,
    },
    {
      id: 2,
      body: "comment-2",
      parent: 1,
    },
    {
      id: 3,
      body: "comment-3"
    },
    {
      id: 4,
      body: 'comment-4',
      parent: 0,
    }
  ]

  const parentMap: any = {}

  for (const comment of comments) {
    if (!comment.hasOwnProperty('parent')) continue;

    if (parentMap[comment.parent]) {
      parentMap[comment.parent].push(comment);
    } else {
      //console.log(comment.parent)

      parentMap[comment.parent] = [comment];
    }
  }
 
  const nestedComments = []
  for (const comment of comments) {
    nestedComments.push(getChild(comment));
  }

  function getChild(comment: any) {
    //console.log('comment: ', comment)
    const currentCommentId = comment.id.toString();    
    const children: any[] = parentMap[currentCommentId];

    if (!children?.length) return comment;
    
    console.log('ch', children)
    /* for (const child of children) {
      const res = getChild(child);
      console.log(res)
    } */
  }

  console.log(nestedComments);
}

export function ch_1() {
  //learnNestedComments();
} 