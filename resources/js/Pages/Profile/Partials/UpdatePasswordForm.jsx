import { useRef } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';

export function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    return (
        <section className={className}>
            <header>
                <p className="text-lg font-medium text-gray-900"><b>Pasahitza editatu</b></p>

                
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
            <div className="row">
                <div className="col-sm-3">
                <InputLabel htmlFor="current_password" value="Pasahitza" />

                </div>
                <div className="col-sm-9">

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className="mt-1 mb-3 form-control w-50 "
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="mt-2" />
                </div><hr />
                </div>

                <div className="row">
                <div className="col-sm-3">
                <InputLabel htmlFor="current_password" value="Pasahitz berria" />
                </div>
                <div className="col-sm-9">
                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => setData('password', e.target.value)}
                        type="password"
                        className="mt-1 mb-3 form-control w-50 "
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div><hr />
                </div>

                <div className="row">
                <div className="col-sm-3">
                    <InputLabel htmlFor="password_confirmation" value="Pasahitza konfirmatu" />
                    </div>
                    <div className="col-sm-9">
                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="mt-1 mb-3 form-control w-50 "
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div><hr />
                </div>
                
                <div className="flex items-center gap-4"><br />
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
}
