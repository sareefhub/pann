import Repo from "./repositories"
import { useEffect,useState } from "react";
import Announcement from "./models/Announcement";


function App() {
  const [announcementL, setAnnouncementL] = useState<Announcement[]>([])

  const fetchannouncementL = async () => {
    const result = await Repo.announcements.getAll()
    if(result){
      setAnnouncementL(result)
    }
  }

  useEffect(() => {
    fetchannouncementL()
  })
  return(
    <div>
      {announcementL.map(announcement => (
        <div key={announcement.id}>
          <p>ID : {announcement.id}</p>
          <p>Description : {announcement.description}</p>
          <p>Positive : {announcement.remarkIfPositive}</p>
          <p>Negative : {announcement.remarkIfNegative}</p>
          <p>Time : {announcement.pubDateTime.toLocaleString('en-US', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}</p>
          <p>UserCode : {announcement.userCode}</p>
        </div>
      ))}
    </div>
  )
}

export default App;