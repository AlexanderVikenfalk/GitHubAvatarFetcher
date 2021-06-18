import PropTypes from 'prop-types';

/**
 * Sets user payload in state
 * @param state // current state
 * @param payload // user input
 * @returns {*&{data: (*)}} // updated state
 */
const UpdateState = (state, payload) => ({
    ...state,
    data: {
        ...state.data,
        ...payload
    }
});

UpdateState.propTypes = {
    state: PropTypes.shape({}).isRequired,
    payload: PropTypes.shape({}).isRequired
};
export default UpdateState;
