import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {Link} from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import FIELDS from './fields';



class SurveyForm extends React.Component{ 

    renderFields(){
        return (
            <div>
                {FIELDS.map(({name, label})=>
                    <Field 
                        key={name} 
                        type="text" name={name} 
                        component={SurveyField} 
                        label={label}
                />)}
            </div>
        )
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurverySubmit)} >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat left white-text">
                        Cancel
                        <i className="material-icons right">done</i>
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
};


function validate(values){
    let errors={};

    errors.recipientList = validateEmails(values.recipientList || '');
    FIELDS.forEach(({name, error})=>{
        if(!values[name]){
            errors[name] = error;
        }
    })

    return errors;
}

export default reduxForm({
    validate,
    form:'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);