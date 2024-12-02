import Header from "../components/header"
import Footer from "../components/footer"
import React from "react";

export default function CalendarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
        <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
