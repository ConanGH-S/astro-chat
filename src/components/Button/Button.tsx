import type {HTMLAttributes, ReactNode} from 'react';
import './Button.css';

type ButtonProps = {
	children?: ReactNode;
	type?: 'button' | 'submit' | 'reset';
	variant?: 'link' | 'button';
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({children, type = 'button', variant = 'button'}: ButtonProps) => {
	switch (variant) {
		case 'link':
			return (
				<button type={type} className='btn'>{children}</button>
			);
		default:
			return (
				<button type={type} className={'btn'}>{children}</button>
			);
	}
};

export default Button;
