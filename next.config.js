module.exports = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/api/:url*",
					destination: "http://localhost:80/api/:url*",
				},
			],
		};
	},
	future: {
		webpack5: true,
	},
};
