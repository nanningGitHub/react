import React, {
  Component
} from "react";
// import NameCard from './components/NameCard';
// import LikeButton from './components/LikeButton';
// import DigitalClock from './components/DigitalClock';
// import CommentBox from './components/CommentBox';
// import CommentList from './components/CommentList';
import ThemeContext from './theme-context';
import ThemedBar from './components/ThemedBar';

const themes={
  light:{
    className: 'btn btn-primary',
    bgColor  : '#eeeeee',
    color    : '#000'
  },
  dark:{
    className: 'btn btn-light',
    bgColor  : '#222222',
    color    : '#fff'
  }
}

// const tags = ['恐龍','足球小子'];

// 定义了一个类，也就是定义了这样的React一个组件
// 一个类继承React.Component
class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      theme: 'light'
    }
    // 留言框开始
    // this.state = {
    //   comments: ['this is my first reply']
    // }
    // this.addComment = this.addComment.bind(this);
     // 留言框结束

     
    //  this.changeTheme = this.changeTheme.bind(this);
  }
  changeTheme(theme){
    this.setState({
      theme,
    })
  }
  // 留言框开始
  // addComment(comments){
  //   this.setState({
  //     comments: [...this.state.comments,comments]
  //   })
  // }
 //留言框结束
  render() {
    // 留言框开始
    // const {comments} = this.state;  //展开式把comments取出
    // 留言框结束
    return ( 
      <ThemeContext.Provider value={themes[this.state.theme]}>
          <div className = "App" >
          { /* <NameCard name='viking' number={1234567890} tags={tags}/> */ } 
          { /* <LikeButton/> */ } 
          { /* <DigitalClock/> */ }
          {/* 留言框开始 */}
            {/* <CommentList comments = {comments}/ >
            <CommentBox 
            commentsLength = {comments.length}
            onAddComment   = {this.addComment} / > */}
          {/* 留言框结束 */}
          <a className='btn btn-light' onClick={()=>{this.changeTheme('light')}}>浅色主题</a>
          <a className='btn btn-secondary'  onClick={()=>{this.changeTheme('dark')}}>深色主题</a>
          </div>
          <ThemedBar/>
      </ThemeContext.Provider>
    );
  }
}

export default App;