import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

const SocialIcon = ({ platform }) => {
  switch (platform.toLowerCase()) {
    case "facebook":
      return <Facebook className="h-6 w-6" />
    case "instagram":
      return <Instagram className="h-6 w-6" />
    case "linkedin":
      return <Linkedin className="h-6 w-6" />
    case "twitter":
      return <Twitter className="h-6 w-6" />
    default:
      return <Linkedin className="h-6 w-6" />
  }
}

export default SocialIcon;
