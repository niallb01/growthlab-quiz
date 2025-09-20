export default function CompletionScreen() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-12 flex flex-col items-center text-center space-y-8 max-w-2xl w-full mx-4">
        {/* Success Animation */}
        <div className="space-y-6">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
            <span className="text-gray-600 text-3xl">✓</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-2xl font-semibold text-gray-900">
              Quiz Complete!
            </h1>
            <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you for completing the quiz! Your personalized results have
              been sent to your email.
            </p>
          </div>
        </div>

        {/* Results Preview */}
        <div className="w-full bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            What's Next?
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="text-gray-700">
                Check your email for detailed results
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="text-gray-700">
                Discover personalized recommendations
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-6 h-6 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="text-gray-700">
                Take action on your insights
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <button
            onClick={() => window.location.reload()}
            className="flex-1 px-6 py-3 bg-gray-700 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Take Quiz Again
          </button>
          <button
            onClick={() => window.open("mailto:", "_blank")}
            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            Check Email
          </button>
        </div>

        {/* Thank you message */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">Thank you for participating!</p>
          <div className="flex justify-center space-x-4 text-xs text-gray-400">
            <span>Made with ❤️ by GrowthLab</span>
          </div>
        </div>
      </div>
    </div>
  );
}
