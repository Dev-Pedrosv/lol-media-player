import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/login";
import { MusicPlayer } from "./pages/music-player";
export function RoutesNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="music-player" element={<MusicPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
