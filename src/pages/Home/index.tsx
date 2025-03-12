import React from 'react';
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import "./assets/css/bootstrap.css";
import "./assets/css/color.css";
import "./assets/css/fontawesome.css";
import "./assets/css/plugins.css";
import "./assets/css/responsive.css";
import "./assets/css/style.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Index: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div id="pageWrapper">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Index; 