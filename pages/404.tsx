export default function Custom404() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-5xl font-bold text-gray-800">404 - Página não encontrada</h1>
        <p className="text-gray-600 mt-4">
          Ops! A página que você procura não existe.
        </p>
        <a href="/" className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
          Voltar para Home
        </a>
      </div>
    );
  }
  