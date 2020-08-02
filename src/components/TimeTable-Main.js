import React, { Component } from "react";
import { Form, InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

import TimetableTable from "./TimeTable-Table";

class TimeTable_Main extends Component {
  state = {
    schoolName: this.props.schoolName,
    classes: this.props.classes,
    count: this.props.count || [],

    timetable: null,

    selectGrade: 1,
    selectClass: 1,
    option: [],
    randomID: 0,
  };

  async componentDidMount() {
    await this.defulatOption();
  }

  defulatOption = () => {
    const { count } = this.state;
    const classCount = count[1];

    const option = [];

    for (var i = 1; i <= classCount; i++) {
      option.push(i + "반");
    }

    this.setState({ selectGrade: 1, option });
  };

  onClick = (event) => {
    event.preventDefault();
  };

  changeGrade = (event) => {
    const { count } = this.state;
    const selectGrade = Number(event.target.value);
    const classCount = count[Number(selectGrade)];

    const option = [];

    for (var i = 1; i <= classCount; i++) {
      option.push(i + "반");
    }
    let randomID = Math.floor(Math.random() * 999999);
    this.setState({ selectGrade, option, randomID });
  };

  changeClass = (event) => {
    const selectClass = Number(event.target.value);
    let randomID = Math.floor(Math.random() * 999999);
    this.setState({ selectClass, randomID });
  };

  returnFunc = (result) => {
    var value = result.replace(/[^0-9]/g, "");
    return (
      <option key={result} value={value} onChange={this.changeClass}>
        {result}
      </option>
    );
  };

  render() {
    const {
      classes,
      selectGrade,
      selectClass,
      schoolName,
      option,
      randomID,
    } = this.state;

    return (
      <>
        <div className="class__selector">
          <Form className="serach_bar" onSubmit={this.onClick}>
            <InputGroup>
              <Input readOnly={true} value={schoolName} type="text" />
              <InputGroupAddon addonType="append">
                <Button color="success">검색하기</Button>
              </InputGroupAddon>
            </InputGroup>
          </Form>
          <Form className="class_select">
            <InputGroup>
              <Input type="select" name="select" onChange={this.changeGrade}>
                <option key="1" value="1">
                  1학년
                </option>
                <option key="2" value="2">
                  2학년
                </option>
                <option key="3" value="3">
                  3학년
                </option>
              </Input>
              <Input type="select" name="select" onChange={this.changeClass}>
                {option.map(this.returnFunc)}
              </Input>
            </InputGroup>
          </Form>
        </div>

        <TimetableTable
          key={randomID}
          schedule={classes[selectGrade][selectClass]}
        />
      </>
    );
  }
}

export default TimeTable_Main;
