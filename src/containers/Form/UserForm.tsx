import './UserForm.css';
import Button from '../../components/Button/Button';
import {useForm, type SubmitHandler} from 'react-hook-form';
import z from 'zod';

const formResolver = z.object({
	email: z.string().email({message: 'El campo debe ser un Email'}),
	password: z.string().min(8, {message: 'La contraseña debe tener al menos 8 caracteres'}),
});

type FormInputs = z.infer<typeof formResolver>;

export default function UserForm() {
	const {register, handleSubmit, formState: {errors}} = useForm<FormInputs>(
		{defaultValues: 
			{email: '', password: ''},
		},
	);

	console.log(errors);

	const onSubmit: SubmitHandler<FormInputs> = ({email, password}) => {
		console.log(email, password);
	};

	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="email">Correo electrónico</label>
				<input {...register('email')} type="email" id="email" name="email" autoComplete='email' />
			</div>
			<div>
				<label htmlFor="password">Contraseña</label>
				<input {...register('password')} type="password" id="password" name="password" autoComplete='current-password' />
			</div>
			<Button type='submit' variant='button'>Enviar</Button>
		</form>
	);
}