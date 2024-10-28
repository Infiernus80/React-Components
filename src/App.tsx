import { Sidebar } from "./Components/sidebar/Sidebar";
import { links_data } from "./data/links_data";

export const App = () => {
  return <Sidebar links_data={links_data} />;
};
