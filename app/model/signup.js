class SignupModel {
    constructor() {

    }
    getValidationErrors() {
        let errors = {}
        if (!this.name) {
            errors.name = 'Name cannot be empty.'
        }
        return errors;
    }
}
export default SignupModel
