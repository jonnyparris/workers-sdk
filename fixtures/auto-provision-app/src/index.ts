export default {
	async fetch(): Promise<Response> {
		return new Response("auto-provision test worker");
	},
};
