const base = 'https://fauna-workers.nrrk-vinnerlister.workers.dev';

export async function api(fetchMethod, resource, data) {
	// user must have a cookie set
	// if (!event.locals.userid) {
	// 	return { status: 401 };
	// }

	const res = await fetch(`${base}/${resource}`, {
		method: fetchMethod,
		headers: {
			'content-type': 'application/json'
		},
		body: data && JSON.stringify(data)
	});


	return {
		status: res.status,
		body: await res.json()
	};
}