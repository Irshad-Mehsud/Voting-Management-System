import React from 'react'

const App = () => {
  return (
    <div>
      <div>
       <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition duration-300">
      <img
        src="https://via.placeholder.com/400x300"
        alt="Product"
        className="w-full h-48 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">Wireless Headphones</h3>
        <p className="text-sm text-gray-600 mt-1">
          High quality sound, noise cancelling, 20-hour battery.
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-md font-bold text-red-500">$59.99</span>
          <button
            onClick={() => alert('Added to cart!')}
            className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
      </div>
    </div>
  )
}

export default App
