import React from "react";
import RetroNavigationBar from "../../components/navbars/retronavigationbar/RetroNavigationBar";
import RetroBoardSection from "../../components/retroboardsection/RetroBoardSection";

class RetroDashboardPage extends React.Component {
  render() {
    return (
      <>
        <RetroNavigationBar />
        <div className="card-deck border border-primary">
          <RetroBoardSection />
          <RetroBoardSection />
          <RetroBoardSection />
        </div>
      </>
    );
  }
}

export default RetroDashboardPage;
