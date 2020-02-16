import React, {Component} from "react";
import noPoster from '../img/no-image.jpg'

class Movie extends Component {
    constructor(props) {
        super(props);
    }
    poster = (this.props.movie =="N/A")? noPoster : this.props.movie.Poster;
    render() {
        return (
            <div className='col-md-3 mb-3'>
                <div className='card'>
                    <div className='card-header' >
                        <h2> {this.props.movie.Title}</h2>
                    </div>
                    <div className='card-body'>
                        <img className='rounded mx-auto d-block'  height={'400 px'} width={'300px'} alt={'the movie title: ' + this.props.movie.Title} src={this.poster}/>
                    </div>
                    <div className='card-footer'>
                        <h3>{this.props.movie.Year}</h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Movie;
