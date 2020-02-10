import { Server, Model } from 'miragejs';

export function makeServer({ env = 'dev' } = {}) {
	let server = new Server({
		env,
		models: {
			user: Model,
		},

		seeds(server) {
			server.create('user', { name: 'Taohuh', age: 25 });
			server.create('user', { name: 'Harry Potter', age: 99 });
		},

		routes() {
			this.namespace = 'api';

			this.get('/users', schema => {
				return schema.users.all();
			});
		}
	});

	return server;
}