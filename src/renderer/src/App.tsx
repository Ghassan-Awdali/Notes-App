

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="flex h-full items-center justify-center">
      <span className="text-4xl text-blue-500">
        Hello from Electron
      </span>
    </div>
  )
}

export default App
