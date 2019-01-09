import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";
// import NameCard from './components/NameCard';
// import LikeButton from './components/LikeButton';
// import DigitalClock from './components/DigitalClock';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';

// const tags = ['恐龍','足球小子'];
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: ['this is my first reply']
    }
    this.onAddComment = this.onAddComment.bind(this);
  }
  onAddComment(comments){
    this.setState({
      comments: [...this.state.comments,comments]
    })
  }
  render() {
    const {comments} = this.state;  //展开式把comments取出
    return ( 
      <div className = "App" >
        {/* <header className = "App-header" >
            <img src = {logo} className = "App-logo" alt= "logo" / >
            <h2 > 欢迎来到北京融顺科技 < /h2> 
            < p >你可以在 < code > src / App.js < /code> 文件中修改。 < /p >
            <a className = "App-link" href = "https://reactjs.org" target= "_blank" rel= "noopener noreferrer" >Learn React </a> 
        </header >  */}
      { /* <NameCard name='viking' number={1234567890} tags={tags}/> */ } 
      { /* <LikeButton/> */ } 
      { /* <DigitalClock/> */ }
        <CommentList comments = {comments}/ >
        <CommentBox 
        commentsLength = {comments.length}
        onAddComment   = {this.onAddComment} / >
      </div>
    );
  }
}

export default App;