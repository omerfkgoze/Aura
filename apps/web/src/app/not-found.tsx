export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl mb-4">Page Not Found</p>
        <a href="/" className="text-blue-600 hover:text-blue-800">
          Return Home
        </a>
      </div>
    </div>
  );
}
