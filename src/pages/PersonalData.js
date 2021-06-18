import React from 'react';
import {useForm} from 'react-hook-form';
import {useStateMachine} from 'little-state-machine';
import {useHistory} from 'react-router-dom';
import UpdateState from '../globalState/updateState';
import {TextInput, ButtonPrimary, Header} from '../components';
import ButtonSecondary from '../components/ButtonSecondary';

/**
 * Page for collecting user name and github profile name/.
 * @returns {JSX.Element}
 * @constructor
 */
const PersonalData = () => {
    // We will use functions from 'react-hook-form' for keeping track of field
    // values, handling submit as well as errors, on any type of field change.

    const {
        register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onChange'});
    // Getting the update action with which we will update state
    const {actions} = useStateMachine({updateAction: UpdateState});
    const history = useHistory();

    const onSubmit = (data) => {
        actions.updateAction(data);
        history.push('./emailandconsent');
    };

    const goBack = () => history.goBack();

    return (
        <div
            className="content react-transition fade-in"
            data-testid="PersonalData">
            <Header text="Personal Data" />
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextInput
                    name="firstName"
                    label="First name"
                    errors={errors.firstName}
                    register={register}
                    data-testid="firstName"
                />
                <TextInput
                    name="lastName"
                    label="Last name"
                    errors={errors.lastName}
                    register={register}
                    data-testid="lastName"
                />
                <TextInput
                    name="githubUserName"
                    label="Github User Name"
                    errors={errors.githubUserName}
                    register={register}
                    data-testid="gitHubUsername"
                />
                <ButtonSecondary text="back" onClick={goBack} />
                <ButtonPrimary type="submit" text="next" isEnabled={isValid} />
            </form>
        </div>
    );
};

export default PersonalData;
