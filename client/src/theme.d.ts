import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: '#F6F5FC'
			primary: {
				lighter: '#E0E3FF'
				light: '#6674F4'
				main: '#5061FC'
				dark: '#3346F0'
			}
		}
	}
}
