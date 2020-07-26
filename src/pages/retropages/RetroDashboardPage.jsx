import React from "react";
import RetroNavigationBar from "../../components/navbars/retronavigationbar/RetroNavigationBar";
import RetroBoardSection from "../../components/retroboardsection/RetroBoardSection";

class RetroDashboardPage extends React.Component {
  constructor() {
    super();
    this.state = {
      countOfSection: 0,
      numOfSections: [],
    };
  }

  addsection = () => {
    const { countOfSection } = this.state;
    const count = countOfSection + 1;
    let stickynoteClasses = "p-0 col-md-3 col-sm-6 mb-1";
    if (count === 2) {
      stickynoteClasses = "p-0 col-md-4 col-sm-6 mb-1";
    } else if (count > 2) {
      stickynoteClasses = "p-0 col-md-6 col-sm-6 mb-1";
    }
    const sectionName = "";
    const numOfSections = [];
    for (let i = 1; i <= count; i++) {
      numOfSections.push(
        <RetroBoardSection
          id={i}
          stickynoteClasses={stickynoteClasses}
          sectionName={"Title-" + count}
          totalSectionCount={count}
        />
      );
    }

    this.setState({ numOfSections, countOfSection: count });
  };

  render() {
    const { numOfSections } = this.state;
    return (
      <>
        <RetroNavigationBar addSectionCallback={this.addsection} />
        <div className="card-deck border border-primary m-0">
          {numOfSections}
        </div>
      </>
    );
  }
}

export default RetroDashboardPage;
