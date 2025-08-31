import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
			},
			colors: {
				border: 'hsl(var(--glass-border))',
				input: 'hsl(var(--glass-border))',
				ring: 'hsl(var(--primary))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				/* Web3 Brand System */
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					glow: 'hsl(var(--success-glow))'
				},
				web3: {
					blue: 'hsl(var(--web3-blue))',
					green: 'hsl(var(--web3-green))',
					purple: 'hsl(var(--web3-purple))'
				},
				
				/* Glass System */
				glass: {
					DEFAULT: 'hsl(var(--glass-primary))',
					secondary: 'hsl(var(--glass-secondary))',
					border: 'hsl(var(--glass-border))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius-large)',
				md: 'var(--radius)',
				sm: 'calc(var(--radius) - 4px)',
				xl: '1.5rem',
				'2xl': '2rem'
			},
			backdropBlur: {
				xs: '2px',
				'3xl': '64px'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-glass': 'var(--gradient-glass)'
			},
			boxShadow: {
				'glass': 'var(--shadow-glass)',
				'hover': 'var(--shadow-hover)',
				'glow': 'var(--shadow-glow)'
			},
			transitionTimingFunction: {
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
