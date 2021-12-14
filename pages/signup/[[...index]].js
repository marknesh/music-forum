import { SignUp } from '@clerk/clerk-react';

export default function SignUpPage() {
  // Finally, mount the SignUp component under "/sign-up" 🎉
  // Don't forget to set the "routing" and "path" props
  return <SignUp routing='path' path='/signup' />;
}