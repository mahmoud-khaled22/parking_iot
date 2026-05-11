export default function Sidebar({ open, onClose }) {
  return (
    <>
      <aside
        className={`fixed md:static inset-y-0 left-0 z-20 w-56 bg-white border-r border-gray-200
             flex flex-col pt-16 md:pt-0 transform transition-transform duration-300 ${
               open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
             }`}
      >
        <div className="p-5 border-b border-gray-100">
          <p className="font-semibold text-gray-800 text-sm">Project Alpha</p>
          <p className="text-xs text-gray-400 mt-0.5">V 1.0.4</p>
        </div>
        <nav className="p-3 flex-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg bg-navy text-white text-sm font-medium">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
            </svg>
            Dashboard
          </button>
        </nav>
      </aside>

      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-10 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  )
}
