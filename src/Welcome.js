import React from "react";

class Welcome extends React.Component {
  render() {
    const todoList = ["learn react", "learn redux"];
    const isLogin = false;
    const test = <h1>hello word</h1>;
    console.log(test);
    return (
      <div className="this" htmlFor="">
        <h1> helle React </h1>
        {[1, 2, 3]}
        <ul>
          {todoList.map(item => (
            <li>{item}</li>
          ))}
        </ul>
        {isLogin ? <p>你已經登錄</p> : <p>請登錄哈哈</p>}
        {
            React.createElement(
                "div",
                null,
                React.createElement(
                  "h1",
                  null,
                  "hello babel"
                )
              )
        }
      </div>
    );
  }
}

export default Welcome;
