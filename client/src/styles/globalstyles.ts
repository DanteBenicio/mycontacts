import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: 'Sora', sans-serif;
		font-size: 1rem;
	}

	html, body, #root {
		max-width: 100vw;
		min-height: 100vh;
	}

	body {
		background-color: ${({ theme }) => theme.colors.background};
	}

	button {
		cursor: pointer;
	}
`;
