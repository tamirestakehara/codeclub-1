var session_1_default = {
	fetch(request) {
	  if (request.method == "POST") {
		return new Response('{"response": "Hello worker!"}', {
		  headers: {
			"content-type": "application/json"
		  }
		});
	  } else {
		return new Response("Error worker!", {
		  headers: {
			"content-type": "text/plain"
		  }
		});
	  }
	}
  };
  export {
	session_1_default as default
  };