module.exports = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/api/:url*",
					destination: "http://api.challengepoints.net/api/",
				},
			],
		};
	},
	webpack5: true,
	images: {
		domains: [
			"beatsaver.com",
			"scoresaber.com",
		],
	},
};
