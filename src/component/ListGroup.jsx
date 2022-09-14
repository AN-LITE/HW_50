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
                    )}

                </ul>
            )
        }
}

    export default ListGroup;




