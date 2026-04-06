/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#0B0B0C',
				'accent': '#4F46E5',
				'accent-hover': '#4539D3',
				'text-primary': '#FFFFFF',
				'text-secondary': '#A1A1A6',
				'border': '#262629',
			},
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-in-out',
				'slide-up': 'slideUp 0.6s ease-out',
				'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				pulseSubtle: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' },
				},
				glow: {
					'0%, 100%': { boxShadow: '0 0 0 0 rgba(79, 70, 229, 0.4)' },
					'50%': { boxShadow: '0 0 0 10px rgba(79, 70, 229, 0)' },
				},
			},
			transitionDuration: {
				'250': '250ms',
				'350': '350ms',
			},
		},
	},
	plugins: [],
};
