import React from 'react';

class Pagination extends React.Component {
    render() {
        return (
            <div className="pagination" onClick={this.handlePagination}>
                {
                    this.props.buttons.map(() => {
                        return (
                            <button>1</button>
                        )
                    })
                }
            </div>
        )

    }
}

export default Pagination;