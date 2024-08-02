import { RecoilRoot, useRecoilValue } from "recoil"
import { jobNotification, Me, messageNotification, networkNotification, Notification } from "./atom"


function App(){
  return <RecoilRoot>
    <NavBar></NavBar>
  </RecoilRoot>
}

function NavBar() {
  const forNetwork = useRecoilValue(networkNotification);
  const forJob = useRecoilValue(jobNotification);
  const forMessage = useRecoilValue(messageNotification);
  const forNotification = useRecoilValue(Notification);
  const forMe = useRecoilValue(Me);
  return (
    <div>
      <button>Home</button>
      <button>My Network ({forNetwork >= 100 ? "99+" : forNetwork})</button>
      <button>Jobs ({forJob >= 100 ? "99+" : forJob})</button>
      <button>Messaging ({forMessage >= 100 ? "99+" : forMessage})</button>
      <button>Notification ({forNotification >= 100 ? "99+" : forNotification})</button>
      <button>Me ({forMe})</button>
    </div>
  )
}

export default App
