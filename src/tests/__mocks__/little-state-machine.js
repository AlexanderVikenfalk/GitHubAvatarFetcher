const littleStateMachine = require('little-state-machine');

/**
 * Mocking our global state with dummy data and a dummy function.
 * @returns {{state: {data: {githubUserName: string, firstName: string, lastName: string, emailAddress: string}}, actions: actions}}
 */
littleStateMachine.useStateMachine = () => ({
    actions: () => {},
    state: {
        data: {
            firstName: 'Mister',
            lastName: 'Mockman',
            emailAddress: 'test@doreply.com',
            githubUserName: 'GitHubMaster2000'
        }
    }
});

module.exports = littleStateMachine;
