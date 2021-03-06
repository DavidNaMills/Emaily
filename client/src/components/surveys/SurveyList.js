import React from 'react';
import {connect} from 'react-redux';
import {fetchSurveys} from '../../actions/index'


class SurveyList extends React.Component{ 

    componentWillMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(survey=>{
            return(
            <div className="card darken-1" key={survey._id}>
                <div className="card-content">
                    <span className="card-title">{survey.title}</span>
                    <p>
                        {survey.body}
                    </p>
                    <p className="right">
                        Send on: {new Date(survey.dateSent).toLocaleDateString()}
                    </p>
                </div>
                <div className="card-action">
                    <a>Yes: {survey.yes}</a>
                    <a>No: {survey.no}</a>
                </div>
            </div>
            )
        })
    }
    
    render(){
        return(
            <div>
                {this.renderSurveys()}
            </div>
        );
    }

};

const mapStateToProps = (state)=>({
    surveys: state.surveys
});

export default connect(mapStateToProps, {fetchSurveys})(SurveyList);