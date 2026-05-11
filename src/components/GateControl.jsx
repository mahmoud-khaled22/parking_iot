export default function GateControl({ gate, onControl }) {
  const isOpen = gate.status === 'Open'

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Gate Control</h2>
      
      <div className="mb-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
        <p className="text-xs text-gray-600 mb-1">Status</p>
        <p className={`text-lg font-bold ${isOpen ? 'text-green-600' : 'text-gray-900'}`}>
          {gate.status}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onControl('open')}
          disabled={isOpen}
          className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all ${
            isOpen
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700 active:scale-95'
          }`}
        >
          Open
        </button>
        <button
          onClick={() => onControl('close')}
          disabled={!isOpen}
          className={`flex-1 py-2 px-3 rounded-lg font-medium text-sm transition-all ${
            !isOpen
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-red-600 text-white hover:bg-red-700 active:scale-95'
          }`}
        >
          Close
        </button>
      </div>
    </div>
  )
}
