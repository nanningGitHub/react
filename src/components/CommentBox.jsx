import React from 'react'
export default class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit=this.handleSubmit.bind(this)
        // 受控组件改为非受控组件
        // this.state = {
        //     value: ''
        // }
    }
    // handleChange(event) {
    //     this.setState({
    //         value: event.target.value
    //     })
    // }
    handleSubmit(event){
        // alert(this.state.value);
        this.props.onAddComment(this.textInput.value)
        event.prevenDefault() //禁止form提交跳转
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">留言内容</label>
                    <input type='text' className='form-control' 
                    // onChange={(event)=>{this.handleChange(event)}} 
                    // value={this.state.value}
                    ref={(textInput)=>{this.textInput=textInput}}
                    placeholder='请输入内容' >
                    </input>
                </div>
                <button type='submit' className='btn btn-primary'>留言</button>
                <p>已有{this.props.commentsLength}条评论</p>
            </form>
        )
    }
}
