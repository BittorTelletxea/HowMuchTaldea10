import React from 'react';
import '../style/headerl.css'
import { InertiaLink } from '@inertiajs/inertia-react';

const LogoutButton = () => {
  return (
    <InertiaLink
      href={route('logout')}
      method="post"
      as="button"
      type="button"
      className="logout"
    ><div className="pt-1 ">
    <button className="log btn btn-dark btn-lg btn-block" style={{ width:'160%', marginLeft: '-5%' }} type="submit">AMAITU SAIOA</button>
  </div>
    </InertiaLink>
  );
};

export default LogoutButton;
