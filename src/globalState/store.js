/**
 * Global state for user input data
 * @type {{data: {githubUserName: string, firstName: string, lastName: string, emailAddress: string, isConsenting: boolean}}}
 */
const store = {
    data: {
        firstName: '',
        lastName: '',
        emailAddress: '',
        githubUserName: '',
        isConsenting: false
    }
};

export default store;
