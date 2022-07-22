import styled from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	margin-top: 4.625rem;
`;

export const InputSearchContainer = styled.div`
	width: 100%;
	margin-top: 3rem;

	> input {
		width: 100%;
		height: 50px;

		padding: 1rem;

		border-radius: 0.5rem;
		border: none;

		box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.15);
		outline-offset: 1px;

		transition: outline-offset 0.05s linear;

		&::placeholder {
			color: #BCBCBC;
		}

		&:focus {
			outline-color: #5061FC;
			outline-offset: 3px;
			outline-style: dotted;
			outline-width: 2px;
		}
	}
`;
