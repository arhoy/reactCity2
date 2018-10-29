import React from 'react';

const FormFields = ({id,formData,change}) => {
    const renderTemplate = ()=>{
        console.log('hi');
        let formTemplate = null;
        switch(formData.element){
            case('input'):
            formTemplate = (
                <div>
                    <input
                        {...formData.config}
                        value = {formData.value}
                        onChange = {(e)=> change({e,id})}
                    />
                </div>
            )
                break;
                default: formTemplate = null;
        }
        return formTemplate;
    }

    return (
        <div>
            {renderTemplate()}
        </div>
    );
};

export default FormFields;