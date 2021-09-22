module.exports = {
	async rewrites() {
		return {
			beforeFiles: [
				{
					source: "/api/:url*",
					destination: "https://challengepointsapi.herokuapp.com/api/",
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
