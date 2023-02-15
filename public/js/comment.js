async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment = document.querySelector('#comment-desc').value;
  
    const post_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  console.log(post_id)
    if (comment) {
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({ post_id, comment}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
          document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.new-comment-form').addEventListener('submit', commentFormHandler);