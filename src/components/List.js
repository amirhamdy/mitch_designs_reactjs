import React, {Component} from 'react';
import Tour from "./Tour";
import http from '../services/httpService';
import Loader from 'react-loader-spinner';

import config from '../config.json';

class List extends Component {
    state = {
        loading: true,
        keyword: '',
        tours: []
    };

    async componentDidMount() {
        const {data: tours} = await http.get(config.apiEndPoint);
        this.setState({loading: false, tours});
    }

    handleChange = (e) => {
        this.setState({keyword: e.target.value});
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

        let tours = this.state.tours, keyword = this.state.keyword.trim().toLowerCase();
        if (keyword.length > 0) {
            tours = tours.filter(function (i) {
                return i.agency.name.toLowerCase().match(keyword);
            });
        }

        return (
            <div className="container mb-4">
                <div className="row">
                    <div className="col-8 mx-auto mt-2">
                        <input value={this.state.keyword} onChange={this.handleChange}
                               className="form-control" type="text" placeholder="Search by Agency Name" aria-label="Search"/>
                    </div>
                </div>
                {tours.map(tour => (<Tour key={tour._id} tour={tour}/>))}
            </div>
        );
    }
}

export default List;