//
//
// import React from "react";
//
// function ListGroup (props) {
//     const { children } = props
//     return (
//         <ul className="list-group">
//             {React.Children.map(children, (child) => {
//                 return <li className="list-group-item">{child}</li>
//             })}
//         </ul>
//     )
// }
//
// export default ListGroup

// <ul className="list-group">
//     {this.props.children.map(item => <li className="list-group-item" key={id++}>{item}</li>)}
// </ul>

import React from "react";

class ListGroup extends React.Component{

        render() {

            let id = 0;
            return(

                <ul className="list-group">
                    {this.props.children.map(item =>
                        <li className="list-group-item list-group-item-action list-group-item-secondary"
                            key={id++}>{item}
                        </li>
                    )}в

                </ul>
            )
        }
}

    export default ListGroup;




