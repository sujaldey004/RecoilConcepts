import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil"
import { notifications, totalNotificationSelector } from "./atom"

function App(){
  return <RecoilRoot>
    <NavBar></NavBar>
  </RecoilRoot>
}

function NavBar() {
  const [notificationCount, setNotificationCount] = useRecoilState(notifications);
  const totalNotification = useRecoilValue(totalNotificationSelector);
  
  return (
    <div>
      <button>Home</button>
      <button>My Network ({notificationCount.network >= 100 ? "99+" : notificationCount.network})</button>
      <button>Jobs ({notificationCount.jobs >= 100 ? "99+" : notificationCount.jobs})</button>
      <button>Messaging ({notificationCount.messaging >= 100 ? "99+" : notificationCount.messaging})</button>
      <button>Notification ({notificationCount.notifications >= 100 ? "99+" : notificationCount.notifications})</button>
      <button>Me ({totalNotification})</button>
    </div>
  )
}

export default App
