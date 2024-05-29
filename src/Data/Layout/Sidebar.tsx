import { MenuItem } from "../../Types/Layout/Sidebar";



export const MenuList: MenuItem[] = [
  {
    title: "General",
    lanClass: "lan-1",
    Items: [
      {
        title: "Dashboards",
        id: 1,
        icon: "home",
        type: "link",
        lanClass: "lan-3",
        path: `${process.env.PUBLIC_URL}/dashboard`,
        
    
      },
    
     
    ],
  },
  {
    title: "Masters",
    lanClass: "lan-8",
    Items: [
   
      // { path: `${process.env.PUBLIC_URL}/app/filemanager`, icon: "file", title: "File Manager", type: "link" },
      { path: `${process.env.PUBLIC_URL}/schools`, icon: "file", title: "Schools", type: "link" },
      { path: `${process.env.PUBLIC_URL}/schoolusers`,icon: "user",title: "School Users", type: "link" },
      { path: `${process.env.PUBLIC_URL}/pagelayout/hidenavscroll`,icon: "file", title: "Links", type: "link" }
  
    ],
  },
 
];