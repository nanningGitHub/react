import React from 'react'

// 将组件修改成方法
// import NameCard from './NameCard';
// class NameCard extends React.Component {
//     render() {
//         const {name,number,isHuman,tags}=this.props;   //es6 析构
//         return(
//             <div className='alert alert-success'>
//                 <h4 className='alert-heading'>{name}</h4>
//                 <ul>
//                     <li>電話：{number}</li>
//                     <li>{isHuman? '人類':'外星生物'}</li>
//                 </ul>
//                 <hr/>
//                 <p>
//                     {tags.map((tag,index)=>(
//                         <span className='badge badge-pill badge-primary' key={index}>{tag}</span>
//                     ))}
//                 </p>
//             </div>
//         )

//     }
// }


// 修改后的方法
const NameCard=(props)=>{
    const {name,number,isHuman,tags}=props;   //es6 析构
    return(
        <div className='alert alert-success'>
        <h4 className='alert-heading'>{name}</h4>
        <ul>
            <li>電話：{number}</li>
            <li>{isHuman? '人類':'外星生物'}</li>
        </ul>
        <hr/>
        <p>
            {tags.map((tag,index)=>(
                <span className='badge badge-pill badge-primary' key={index}>{tag}</span>
            ))}
        </p>
    </div> 
    )

}


export default NameCard