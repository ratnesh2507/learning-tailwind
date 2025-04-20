import Channelbar from "./components/ChannelBar";
import ContentContainer from "./components/ContentContainer";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;
