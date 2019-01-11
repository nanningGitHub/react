import React, { Component ,Fragment} from 'react';   // 引入Fragment
import TodoItem from './TodoItem';
import './style.css';

class TodoList extends Component {
    // ES6语法  组件的构造函数 
    // 创建的一瞬间执行这个方法
    constructor(props) {
        super(props)    //进行一些初始化
        this.state = {    //创建数据项
            list: [],
            inputValue: ''
        }
        // 比在dom上绑定this指向性能更好
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleBtnClick() {
        // this.state.list.push('hello')  //是改变不了数据的
        // 这是的指向的是<button></button>这个按钮

        this.setState({
            // ...this.state.list 等于 'learn react','learn english','learn vue'
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleInputChange(enevt) {
        this.setState({
            inputValue: enevt.target.value
        })
    }
    handleItemClick(index) {
        console.log(index)
        // 尽量不要改state,应拷贝一个副本
        const list = [...this.state.list];
        // list.splice(index, 1,'111');
        list.splice(index, 1)
        this.setState({ list })
    }
    handleDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1)
        this.setState({ list })
    }
    getTodoList() {
        return (
            this.state.list.map((item, index) => {
                return (<TodoItem key={index} content={item} index={index} delete={this.handleDelete} />)
            })
        )
    }
    render() {
        return (
            // 只能返回一个大的jsx
            // 在页面多一层div包裹
            // <div>  
            // < React.Fragment>
            <Fragment>
                <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange} />
                    <button 
                    className='red-btn'
                    // style={{}}  外边的{}是表达式  里边的{}是对象 
                    // style={{background:'red',color:'#fff'}} 
                    onClick={this.handleBtnClick}>add</button>
                    {/* 这是this指向是TodoList这个组件 */}

                </div>
                <ul>
                    {
                        // this.state.list.map((item, index) =>
                        // <li key={index} onClick={this.handleItemClick.bind(this, index)}>{item}</li>
                        // <TodoItem key={index} content={item} index={index} delete={this.handleDelete} />
                        //  父组件通过属性的形式向子组件传递参数
                        // )
                        this.getTodoList()
                    }
                </ul>
            </Fragment>
            //</React.Fragment>
            // </div>
        )
    }
}

export default TodoList;