import { useEffect } from 'react';

interface RedirectRouteProps {
  to: string;
}

const RedirectRoute = ({ to }: RedirectRouteProps) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecionando...</p>
      </div>
    </div>
  );
};

export default RedirectRoute;