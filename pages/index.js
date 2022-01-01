import MyWork from "../components/lyout/MyWork";
import Navbar from "../components/lyout/Navbar";
import Welcome from "../components/lyout/Welcome";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <MyWork />
    </div>
  );
}
