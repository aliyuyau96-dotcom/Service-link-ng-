import SignUpForm from '@/components/auth/SignUpForm';

export const metadata = {
  title: 'Sign Up - ServiceLink NG',
};

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <SignUpForm />
    </div>
  );
}