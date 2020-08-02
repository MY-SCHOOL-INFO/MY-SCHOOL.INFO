import React, { Component } from "react";
import { isMobile } from "react-device-detect";
import { withRouter } from "react-router-dom";

import axios from "axios";

import Main from "./TimeTable-Main";
import Loading from "./TimeTable-Loading";

import "../css/Timetable.css";

class TimeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      api_url: "https://comcigan-api.herokuapp.com/api/schools",
      schoolName: this.props.match.params.schoolName,
      classes: [],
      count: [],
    };
  }

  async componentDidMount() {
    const params = this.props.match.params;
    const schoolName = params.schoolName;
    const {
      data,
      data: { searchSchool },
    } = await axios.get(this.state.api_url + "/schedule/" + schoolName);

    if (!searchSchool) {
      await alert("학교를 찾을 수 없습니다.\n메인 페이지로 이동합니다");
      this.props.history.push("/");
    } else {
      this.setState({ classes: data.class, count: data.count });
    }

    this.setState({ isLoading: false, schoolName });
  }

  render() {
    const { isLoading, classes, count } = this.state;

    return (
      <>
        {isLoading ? (
          <div className="loader__container">
            {isMobile ? (
              <div className="loader__mobile">
                <Loading />
              </div>
            ) : (
              <div className="loader__browser">
                <Loading />
              </div>
            )}
          </div>
        ) : (
          <div className="timetable__container">
            {isMobile ? (
              <div className="timetable__mobile">
                <Main
                  classes={classes}
                  count={count}
                  schoolName={this.state.schoolName}
                />
              </div>
            ) : (
              <div className="timetable__browser">
                <Main
                  classes={classes}
                  count={count}
                  schoolName={this.state.schoolName}
                />
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}

export default withRouter(TimeTable);
