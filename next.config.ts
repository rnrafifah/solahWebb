import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    allowedDevOrigins: ['192.168.0.9'],
	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["turbopack-inline-svg-loader"],
				condition: {
					content: /^[\s\S]{0,4000}$/, // Inline SVGs smaller than ~4Kb
				},
				as: "*.js",
			},
		},
	},
};

export default nextConfig;
