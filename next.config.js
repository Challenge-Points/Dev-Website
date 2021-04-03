module.exports = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/api/:url*",
					destination: "https://challenge-points-dev.herokuapp.com/api/",
				},
			],
		};
	},
	future: {
		webpack5: true,
	},
};
