import React from "react";
import { Route, Routes } from "react-router-dom";
import Hero from "../../Hero/Hero_API";
import Profile from "../../Profile/Profile";

function HomePage() {
    return (
        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="profile/:user_id" element={<Profile />} />
            <Route path="*" element={<p>Error not found</p>} />
        </Routes>
    );
}

export default HomePage;
