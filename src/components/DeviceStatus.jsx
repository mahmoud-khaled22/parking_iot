export default function DeviceStatus({ device }) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Device Status</h2>
      
      <div className="space-y-3">
        <div className="flex items-start justify-between pb-3 border-b border-gray-100">
          <span className="text-sm text-gray-600">Connection</span>
          <div className="text-right">
            <p className={`text-sm font-semibold ${
              device.connectionStatus === 'Connected' ? 'text-green-600' : 'text-red-600'
            }`}>
              {device.connectionStatus}
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{device.ipAddress}</p>
          </div>
        </div>

        <div className="flex items-start justify-between pb-3 border-b border-gray-100">
          <span className="text-sm text-gray-600">Raspberry Pi</span>
          <span className={`text-sm font-semibold ${
            device.raspberryPiConnected ? 'text-green-600' : 'text-red-600'
          }`}>
            {device.raspberryPiConnected ? 'Connected' : 'Disconnected'}
          </span>
        </div>

        <div className="flex items-start justify-between pb-3 border-b border-gray-100">
          <span className="text-sm text-gray-600">System</span>
          <span className={`text-sm font-semibold ${
            device.systemOnline ? 'text-green-600' : 'text-red-600'
          }`}>
            {device.systemOnline ? 'Online' : 'Offline'}
          </span>
        </div>

        <div className="flex items-start justify-between">
          <span className="text-sm text-gray-600">Last Update</span>
          <span className="text-sm text-gray-900 font-medium">{device.lastUpdate}</span>
        </div>
      </div>
    </div>
  )
}
