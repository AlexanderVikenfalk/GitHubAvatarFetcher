import React from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {useStateMachine} from 'little-state-machine';
import {
    TextInput,
    CheckBox,
    ButtonPrimary,
    Header,
    ButtonSecondary
} from '../components';
import UpdateState from '../globalState/updateState';

/**
 * Page for collecting user email and consent.
 * @returns {JSX.Element}
 * @constructor
 */
const EmailAndConsent = () => {
    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onChange'});
    const {actions} = useStateMachine({updateAction: UpdateState});
    const history = useHistory();

    const goBack = () => history.goBack();

    const onSubmit = (data) => {
        actions.updateAction(data);
        history.push('./githubprofile');
    };

    return (
        <div
            className="content react-transition fade-in"
            data-testid="EmailAndConsent">
            <Header text="Email and consent" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    name="emailAddress"
                    label="Email"
                    errors={errors.emailAddress}
                    register={register}
                    pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
                />
                <CheckBox
                    name="isConsenting"
                    label="Agree with terms and services"
                    errors={errors.isConsenting}
                    register={register}
                />
                <ButtonSecondary text="back" onClick={goBack} />
                <ButtonPrimary
                    type="submit"
                    text="submit"
                    isEnabled={isValid}
                />
            </form>
        </div>
    );
};

export default EmailAndConsent;
