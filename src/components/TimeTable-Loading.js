import React, { Component } from "react";
import TextLoop from "react-text-loop";

class TimeTable_Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      api_url: "https://comcigan-api.herokuapp.com/api/schools",
      school: "",
    };
  }

  render() {
    return (
      <>
        <img className="loader__gif" src="../loading.svg" alt="로딩 중" />
        <div className="loader__title">
          <TextLoop
            interval={1500}
            mask={true}
            springConfig={{ stiffness: 400, damping: 50 }}
          >
            <span>시간표 데이터를 불러오는 중입니다</span>
            <span>잠시만 기다려주세요</span>
          </TextLoop>
        </div>
      </>
    );
  }
}

export default TimeTable_Loading;
