import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';
import FIELDS from './fields';

const renderFields=(formValues)=>{
    return (
        <div>
            {FIELDS.map(({name, label})=>
                <div key={name}>
                    <label>{label}</label>
                    <div>{formValues[name]}</div>
                </div>
            )}
        </div>
    )
}


const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => (
    <div>
        <h5>confirm your survey</h5>
        {renderFields(formValues)}
        <button
            className="yellow darken-3 white-text btn-flat"
            onClick={onCancel}
        >
        Back
        </button>
        <button className="green btn-flat right white-text"
            onClick={()=>submitSurvey(formValues, history)}
        >
            Send Survey
            <i className="material-icons right">email</i>
        </button>
    </div>
);


const mapStateToProps = (state) =>({
    formValues: state.form.surveyForm.values
});

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));