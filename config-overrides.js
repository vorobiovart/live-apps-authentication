module.exports = (config, env) => {
	config.externals = {
		axios: 'axios',
		'react-router-dom': 'ReactRouterDOM',
		react: 'React',
		'react-dom': 'ReactDOM'
	};

	config.optimization.runtimeChunk = false;

	config.optimization.splitChunks = {
		cacheGroups: {
			default: false,
		},
	};

	return config;
};