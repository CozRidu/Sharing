import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { X } from 'lucide-react';
import Button from '../ui/Button';
import Modal from '../ui/Modal';

const loginSchema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

type LoginFormData = z.infer<typeof loginSchema>;

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function LoginModal({ isOpen, onClose, onSuccess }: LoginModalProps) {
  const [isLoading, setIsLoading] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true); // Show "Signing in..." while waiting

    try {
      // This sends a request to your backend to log the user in
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST', // HTTP method used to send data
        headers: {
          'Content-Type': 'application/json', // Tells the server the type of data
        },
        body: JSON.stringify(data), // Converts the username & password into JSON
      });

      const result = await response.json(); // Get the response from the server

      if (response.ok) {
        // If login is successful, store the user info and token in browser memory
        localStorage.setItem('user', JSON.stringify(result.user));
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
        // Run any success actions (like showing their name or redirecting)
        onSuccess();
        // Close the login popup
        onClose();
      } else {
        // If login failed, show the message from the server
        alert(result.message || 'Login failed');
      }
    } catch (error) {
      // If there's an error connecting to the server
      alert('Something went wrong. Please try again.\n' + error);
    }

    setIsLoading(false); // Turn off loading spinner/text
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white hover:text-[#e22441]"
        >
          <X className="h-5 w-5" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-white">Sign In</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
              Username
            </label>
            <input
              {...register('username')}
              type="text"
              className="w-full px-3 py-2 border rounded-md bg-[#151518] text-white border-[#222] focus:outline-none focus:ring-2 focus:ring-[#e22441] placeholder-[#aaa]"
              placeholder="yourusername"
            />
            {errors.username && (
              <p className="text-red-600 text-sm mt-1">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              className="w-full px-3 py-2 border rounded-md bg-[#151518] text-white border-[#222] focus:outline-none focus:ring-2 focus:ring-[#e22441] placeholder-[#aaa]"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-600 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>
      </div>
    </Modal>
  );
}