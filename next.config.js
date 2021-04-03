module.exports = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/api/:url*",
					destination: process.env.API_URL,
				},
			],
		};
	},
	future: {
		webpack5: true,
	},
};
