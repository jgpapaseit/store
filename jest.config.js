const config = {
	verbose: true,
	transform: {
		".js?$": "babel-jest"
	},
	testTimeout: 15000,
	transformIgnorePatterns: [],
};

module.exports = config;