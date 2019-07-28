import React, {Component} from 'react';
import Link from "react-router-dom/es/Link";
import Rating from "./Rating";
import http from "../services/httpService";
import config from "../config";
import Loader from "react-loader-spinner";

class TourDetails extends Component {
    state = {
        loading: true,
        tour: {}
    };

    async componentDidMount() {
        const tourId = this.props.match.params.id;
        if (!tourId)
            this.props.history.replace('/list');
        const {data: tour} = await http.get(`${config.apiEndPoint}/${tourId}`);
        this.setState({loading: false, tour});
    }

    handelGoBack = () => {
        this.props.history.goBack();
    };

    handelPlan = () => {
        if (this.state.tour.agency.plan === 'premium')
            return <button type='button' className='btn btn-block btn-info'>Send email to: {this.state.tour.agency.email}</button>
    };

    render() {
        const {loading} = this.state;

        if (loading) {
            return (
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-3 mx-auto mt-5">
                            <Loader type="Plane" color="#f5a623"/>
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div className="row">
                <div className="col-8 mx-auto mt-2">
                    <button id='backBtn' onClick={this.handelGoBack}
                            className='btn btn-link float-right text-right'>الرجوع الي قائمة الرحلات
                    </button>
                    <img className='center' alt='tour image' src={this.state.tour.featuredImg.large}/>
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
                                <p className='card-text pt-3'>{this.state.tour.description}</p>
                                {this.handelPlan()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourDetails;