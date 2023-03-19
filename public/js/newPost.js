async function newFormHandler(event) {
	event.preventDefault();
	const title = document.querySelector('input[name="postTitle"]').value;
	const post_content = document.querySelector('input[name="post_content"]').value;
	const response = await fetch(`/api/posts`, {
		method: 'post',
		body: JSON.stringify({
			title,
			post_content
		}),
		headers: {
			'Content-Type': 'application/json'
		}
	});
	if (response.ok) {
		document.location.replace('/dashboard');
	} else {
		alert(response.statusText);
	}
}

document.querySelector('#newPostBtn').addEventListener('click', newFormHandler);