export default function SlotCard({ slot }) {
  const isOccupied = slot.occupied

  return (
    <div
      className={`p-4 rounded-lg border-l-4 transition-all ${
        isOccupied
          ? 'bg-red-50 border-red-500 border'
          : 'bg-green-50 border-green-500 border'
      } hover:shadow-md cursor-pointer`}
    >
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-bold text-gray-900">{slot.id}</h3>
          <p className={`text-xs font-semibold ${isOccupied ? 'text-red-600' : 'text-green-600'}`}>
            {isOccupied ? 'OCCUPIED' : 'AVAILABLE'}
          </p>
        </div>
        <div className={`w-3 h-3 rounded-full ${isOccupied ? 'bg-red-500' : 'bg-green-500'}`}></div>
      </div>
      <div className="flex items-center justify-between text-xs text-gray-600 mt-2">
        <span>Sensor: {slot.sensor}</span>
      </div>
    </div>
  )
}
