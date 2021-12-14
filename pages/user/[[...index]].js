import { UserProfile } from '@clerk/clerk-react';
import Layout from '../../components/Layout';

export default function UserProfilePage() {
  // Finally, mount the UserProfile component under "/user" 🎉
  // Don't forget to set the "routing" and "path" props
  return (
  <Layout>
  <UserProfile routing='path' path='/user' />;

  </Layout>
  )
}