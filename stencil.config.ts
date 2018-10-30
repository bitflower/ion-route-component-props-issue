import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
	outputTargets: [
		{
			type: 'www',
			dir: 'public',
			serviceWorker: {
				swSrc: 'src/sw.js',
			},
		},
	],
	globalScript: 'src/global/app.ts',
	globalStyle: 'src/global/app.css',
};
