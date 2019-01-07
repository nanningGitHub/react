import  React  from 'react';

class LikeButton extends React.Component{
    constructor(props){
        super(props)
        this.state={
            likes:0
        }

        // this.increseLikes=this.increseLikes.bind(this)  // 绑定this
    }
    increseLikes(){
    // console.log(this)   undefined   未绑定this时
    console.log(this)
    this.setState({  //调用方法修改值
        likes:++this.state.likes
    })
    }
    render(){
        return(
            <div className="likes-button-component">
                <button className='btn btn-outline-primary btn-lg' 
                // onClick={this.increseLikes}   //需要进行绑定this
                onClick={()=>{this.increseLikes()}}
                >   
                    👍{this.state.likes}
                </button>
            </div>
        )
    }

}

export default LikeButton


