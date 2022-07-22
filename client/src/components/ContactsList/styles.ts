import styled from 'styled-components';

export const Container = styled.div`
	margin-top: 2rem;

`;

export const Header = styled.header`
	--main-color: ${({ theme }) => theme.colors.primary.main};

	display: flex;
	justify-content: space-between;
	align-items: center;

	padding: 1rem 0;

	width: 100%;

	> strong {
		font-size: 1.5rem;
		color: #222;
	}

	> a {
		font-weight: 700;
		color: var(--main-color);
		text-decoration: none;

		padding: 1rem;

		border: 2px solid var(--main-color);
		border-radius: 0.5rem;

		transition: outline-offset 0.05s linear;

		transition: color, background-color 0.3s ease;

		&:hover {
			color: #fff;
			background-color: var(--main-color);
		}

		&:focus {
			border-color: transparent;

			outline-style: dotted;
			outline-offset: 3px;
			outline-color: var(--main-color);
			outline-width: 2px;
		}
	}
`;

export const ListContainer = styled.div`
	--main-color: ${({ theme }) => theme.colors.primary.main};

	margin-top: 1.5rem;

	.sort-button {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;

		background-color: transparent;
		border: none;
		border-radius: 0.5rem;
		height: 20px;

		transition: outline-offset 0.05s linear;

		> span {
			color: var(--main-color);
			font-weight: 700;
			line-height: 1.25rem;
			height: 20px;
		}

		&:focus {
			outline-style: dotted;
			outline-offset: 6px;
			outline-color: var(--main-color);
			outline-width: 2px;
		}
	}
`;
