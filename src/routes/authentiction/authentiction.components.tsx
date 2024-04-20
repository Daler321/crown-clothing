import { AuthenticationConatainer } from './authentication.style';
import React from 'react';

import SignUpForm from '../../component/sign-up-form/sign-up-form.component';
import SignInForm from '../../component/sign-in-form/sign-in-form.component';

const Authentication = () => {
  return (
    <AuthenticationConatainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationConatainer>
  );
};

export default Authentication;
