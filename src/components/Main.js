import React, { Component } from "react";
import { Form, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

import axios from "axios";

import "../css/Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api_url: "https://comcigan-api.herokuapp.com/api/schools",
      school: "",
    };
  }

  onChange = (event) => {
    const {
      target: { value },
    } = event;
    var pattern_num = /[0-9]/;
    var pattern_spc = /[~!/@#$%^&*()_+|<>?:{}=`]/;
    if (!pattern_spc.test(value) && !pattern_num.test(value)) {
      this.setState({ school: value });
    } else {
      alert("특수문자, 숫자는 입력이 불가합니다");
    }
  };

  searchSchool = async (event) => {
    event.preventDefault();
    if (this.state.school !== "") {
      const {
        data,
        data: { searchSchool },
      } = await axios.get(
        this.state.api_url + "/search/" + encodeURI(this.state.school)
      );

      if (searchSchool) {
        const { school } = data;

        this.props.history.push(`/timetable/${encodeURI(school)}`);
      } else {
        const {
          result_data: { reasonShort, totalData },
        } = data;
        if (reasonShort === "검색된 학교가 많습니다") {
          alert(
            `검색된 학교가 많습니다.\n더 자세한 학교명을 입력해주세요.\n🔍 검색 결과 수 : ${totalData}건`
          );
        } else if (reasonShort === "검색된 학교가 없습니다") {
          alert(
            "검색된 학교가 없습니다.\n해당 웹사이트는 컴시간 시간표를 사용하는 학교의 시간표만 지원합니다."
          );
        }
      }
    } else {
      alert("학교명을 입력해주세요");
    }
  };

  render() {
    return (
      <div className="container">
        <Form onSubmit={this.searchSchool}>
          <InputGroup className="search_bar">
            <Input
              readOnly={this.state.setSchool}
              className="search"
              placeholder="학교명을 입력해주세요"
              value={this.state.school}
              onChange={this.onChange}
              type="text"
              bsSize="lg"
            />
            <InputGroupAddon addonType="append">
              <Button type="submit" color="success">
                검색하기
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Form>
      </div>
    );
  }
}

export default withRouter(Main);
