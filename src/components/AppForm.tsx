import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { IFormData } from '../models/IFormData';
import { schema } from '../models/FormSchema';

export const AppForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: IFormData) => {
    console.log('It worked', data);
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit(submitData)}>
        <label htmlFor='firstName'>First name</label>

        <input type='text' id='firstName' {...register('firstName')} />
        <div className='error-container'>
          {errors.firstName && (
            <p style={{ color: 'red' }}>{errors.firstName.message}</p>
          )}
        </div>

        <label htmlFor='lastName'>Last name</label>
        <input type='text' id='lastName' {...register('lastName')} />
        <div className='error-container'>
          {errors.lastName && (
            <p style={{ color: 'red' }}>{errors.lastName.message}</p>
          )}
        </div>

        <label htmlFor='age'>Age</label>
        <input
          type='number'
          id='age'
          {...register('age', { valueAsNumber: true })}
        />
        <div className='error-container'>
          {errors.age && <p style={{ color: 'red' }}>{errors.age.message}</p>}
        </div>
        <label htmlFor='cat'>Your pets name (optional)</label>
        <input type='text' id='cat' {...register(`pets.pet`)} />

        <div className='error-container'></div>

        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' {...register('email')} />
        <div className='error-container'>
          {errors.email && (
            <p style={{ color: 'red' }}>{errors.email.message}</p>
          )}
        </div>
        <label htmlFor='password'>Password</label>
        <input type='password' id='password' {...register('password')} />
        <div className='error-container'>
          {errors.password && (
            <p style={{ color: 'red' }}>{errors.password.message}</p>
          )}
        </div>

        <label htmlFor='confirmPassword'>Confirm password</label>
        <input
          type='password'
          id='confirmPassword'
          {...register('confirmPassword')}
        />
        <div className='error-container'>
          {errors.confirmPassword && (
            <p style={{ color: 'red' }}>{errors.confirmPassword.message}</p>
          )}
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};
