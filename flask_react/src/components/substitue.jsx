import React, { Component } from "react";

class Substitue extends Component {
    render() {
        const { teacher, onDelete } = this.props;
        return (
            <div className="align-items-center row">
                <span className="align-middle text-start col">
                    {teacher.name}
                </span>

                <span className="align-middle text-start col">
                    {teacher.period}
                </span>

                <button className="btn bg-success text-white m-2 col">
                    Confirm
                </button>

                <button
                    className="btn bg-danger text-white m-2 col"
                    onClick={() => onDelete(teacher.id)}
                >
                    Remove
                </button>
            </div>
        );
    }
}

export default Substitue;