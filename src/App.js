// بسم الله الذى لا يضر مع اسمه شئ لا فى الارض و لا فى السماء
// اعوذ بكلمات الله التامات من شر ما خلق
// اعوذ بكلمات الله التامات من كل شيطان هامه و من كل عين لامه
// اللهم انتى ربى و وليى ف نعم الرب و نعم الوكيل و النصير
// اللهم اعنى على ذكرك و شكرك و حسن عبادتك
// اللهم انت السلام و منك السلام تباركت يا ذا الجلال و الاكرام
// بسم الله نبدء و بسم الله نستعين

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import {
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
} from "./components";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetail />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
