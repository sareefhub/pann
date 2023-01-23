import { AnnouncementRepository } from "./AnnouncementRepository"
import { UserResultRepo } from "./UserResultRepository"

const repositories = {
  announcements: new AnnouncementRepository(),
  userResults: new UserResultRepo(),
}

export default repositories