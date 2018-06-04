import React from 'react';
import SurveyForm from './SurveyForm';
import {reduxForm} from 'redux-form';
import SurveryFormReview from './SurveyFormReview';


class SurveyNew extends React.Component{ 
    state={
        showReview: false
    };

    renderContent(){
        return this.state.showReview
        ? 
            <SurveryFormReview 
                onCancel={()=>this.setState({showReview:false})}
            /> 
        : 
            <SurveyForm 
                onSurverySubmit={()=>this.setState({showReview:true})}
            />
    }

    render(){
        return(
            <div>
                {this.renderContent()}
            </div>
        );
    }
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);