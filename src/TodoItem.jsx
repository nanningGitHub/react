import React,{Component} from 'react';

class TodoItem extends Component {
    constructor(props) {    //es6 继承的方式
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    // 子组件如果向父组件通信，要调用父组件传递过来的方法
    handleDelete() {
        this.props.delete(this.props.index)
        // const { delete, index } = this.props;   //delete为关键词
    }
    render() {
        const { content } = this.props;  //es6解构赋值
        // 子组件通过props的形式接收父组件传递过来的参数
        return (
            <div onClick={this.handleDelete.bind(this)}>{content}</div>
        )
    }
}
export default TodoItem;