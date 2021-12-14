import { SignIn } from '@clerk/clerk-react';
import { useRouter } from 'next/router';

export default function SignInPage() {
  // Mount the SignIn component under "/sign-up". 
  // The routing is set to path-based.

  return <SignIn  routing="path" path="/signin" />;
}