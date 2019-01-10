import React, { Component } from 'react';

class TodoList extends Component {
    // ES6语法  组件的构造函数 
    // 创建的一瞬间执行这个方法
    constructor(props) {
        super(props)    //进行一些初始化
        this.state = {    //创建数据项
            list: [
                'learn react',
                'learn english',
                'learn vue'
            ],
            inputValue: ''
        }

    }
    handleBtnClick() {
        // this.state.list.push('hello')  //是改变不了数据的
        // 这是的指向的是<button></button>这个按钮

        this.setState({
            // ...this.state.list 等于 'learn react','learn english','learn vue'
            list: [...this.state.list, 'hello']
        })
    }
    handleInputChange(enevt) {
        console.log(enevt)
        console.log(enevt.target)
        console.log(enevt.target.value)
    }
    render() {
        return (
            // 只能返回一个大的jsx
            <div>
                <div>
                    <input onChange={this.handleInputChange.bind(this)} />
                    <button onClick={this.handleBtnClick.bind(this)}>add</button>
                    {/* 这是this指向是TodoList这个组件 */}

                </div>
                <ul>
                    {
                        this.state.list.map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
            </div>

        )
    }
}

export default TodoList;