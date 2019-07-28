import React, {Component} from 'react';

class Rating extends Component {
    state = {
        rating: this.props.rating
    };

    render() {
        const stars = [];
        for (let i = 0; i < this.state.rating; i++) {
            stars.push(<span key={i} className="fa fa-star Rate-checked"></span>);
        }

        return (
            <React.Fragment>
                {stars}
            </React.Fragment>
        );
    }
}

export default Rating;