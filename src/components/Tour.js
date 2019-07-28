import React, {Component} from 'react';
import Rating from "./Rating";
import Link from "react-router-dom/es/Link";

class Tour extends Component {
    state = {
        tour: this.props.tour
    };

    render() {
        return (
            <div className="row">
                <div className="col-8 mx-auto mt-2">
                    <Link to={`/details/${this.state.tour._id}`}>
                        <div className="card">
                            <div className="Tour-card">
                                <div className="card-body">
                                    <h5 className="card-title">{this.state.tour.title}</h5>
                                    <Rating rating={this.state.tour.rating}/>
                                    <p className="card-text">{this.state.tour.agency.name}</p>
                                    <div id="offer">
                                        <div id="days">
                                            {this.state.tour.days} <i className="fa fa-calendar" aria-hidden="true"></i>
                                        </div>
                                        <div id="mealPlan">
                                            {this.state.tour.mealPlan} <i className="fa fa-cutlery" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="img-square-wrapper">
                                    <img alt='tour image' src={this.state.tour.featuredImg.small}/>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Tour;