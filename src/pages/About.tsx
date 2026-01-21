const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              This is a modern React TypeScript application that demonstrates best practices
              in frontend development. Built with Vite for fast development and optimized
              production builds.
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technologies Used</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>React 18 with TypeScript</li>
              <li>Vite for build tooling</li>
              <li>Tailwind CSS for styling</li>
              <li>React Router for navigation</li>
              <li>ESLint and Prettier for code quality</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
