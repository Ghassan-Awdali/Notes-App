import { Content, RootLayout, Sidebar } from "./components/AppLayout"


function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <RootLayout>
      <Sidebar className="p-2 border-4 border-red-500">SideBar</Sidebar>
      <Content className="border-4 border-blue-500">Content</Content>
    </RootLayout>
  )
}

export default App
