const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to React TypeScript App
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A modern frontend application built with React, TypeScript, and Tailwind CSS
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">TypeScript</h3>
              <p className="text-gray-600">Type-safe development with full IntelliSense support</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
              <p className="text-gray-600">Utility-first CSS framework for rapid UI development</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">React Router</h3>
              <p className="text-gray-600">Client-side routing for single-page applications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
