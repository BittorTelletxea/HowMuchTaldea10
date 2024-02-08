import { useState } from 'react';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import '@/Components/style/perfil.css'

const UpdateProfileInformation = ({ mustVerifyEmail, status, onUpdateSuccess }) => {
  const user = usePage().props.auth.user;

  const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    name: user.name,
    email: user.email,
    password: '', // Add password field
    confirmPassword: '', // Add confirmPassword field
  });

  const submit = (e) => {
    e.preventDefault();

    patch(route('profile.update'), {
      onSuccess: onUpdateSuccess, // Callback function when update is successful
    });
  };

  return (
    <section>
      <header>
        <p className="text-lg font-medium text-gray-900"><b>Profila editatu</b></p>
      </header>

      <form onSubmit={submit} className="mt-6 space-y-6">
        <div className="row">
          <div className="col-sm-3">
            <InputLabel htmlFor="name" value="Name" />
          </div>
          <div className="col-sm-9">
            <TextInput
              id="name"
              className="mt-1 mb-3 form-control w-50"
              value={data.name}
              onChange={(e) => setData('name', e.target.value)}
              required
              isFocused
              autoComplete="name"
            />
            <InputError className="mt-2" message={errors.name} />
          </div><hr />
        </div>

        <div className="row">
          <div className="col-sm-3">
            <InputLabel htmlFor="email" value="Email" />
          </div>
          <div className="col-sm-9">
            <TextInput
              id="email"
              type="email"
              className="mt-1 mb-3 form-control w-50"
              value={data.email}
              onChange={(e) => setData('email', e.target.value)}
              required
              autoComplete="username"
            />
            <InputError className="mt-2" message={errors.email} />
          </div><hr />
        </div>

        

        <div><br />
          <button className="editatu btn btn-dark btn-lg btn-block w-2" type="submit" disabled={processing}>
             <b>GORDE</b>
          </button>
          <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-gray-600">Aldaketak gorde dira.</p>
          </Transition>
        </div>
      </form>
    </section>
  );
};

export default UpdateProfileInformation;
