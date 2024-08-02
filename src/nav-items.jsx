import { Home, Upload, Image, Settings } from "lucide-react";
import Index from "./pages/Index.jsx";
import UploadContent from "./pages/UploadContent.jsx";
import BrowseContent from "./pages/BrowseContent.jsx";
import UserSettings from "./pages/UserSettings.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Upload",
    to: "/upload",
    icon: <Upload className="h-4 w-4" />,
    page: <UploadContent />,
  },
  {
    title: "Browse",
    to: "/browse",
    icon: <Image className="h-4 w-4" />,
    page: <BrowseContent />,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: <Settings className="h-4 w-4" />,
    page: <UserSettings />,
  },
];
