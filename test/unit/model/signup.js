var assert = require('chai').assert
var SignupModel = require('app/model/signup').default

describe('SignupModel', function() {
    describe('getValidationErrors()', function () {
        it('should be a function', function() {
            var signupModel = new SignupModel()
            assert.isFunction(signupModel.getValidationErrors)
        })
        it('should return an object', function() {
            var signupModel = new SignupModel()
            var errors = signupModel.getValidationErrors()
            assert.isObject(errors)
        })
        it('should require a name', function () {
            var signupModel, errors;
            // we are not setting a name on the model, therefor
            // the errors should have a 'name' property
            signupModel = new SignupModel()
            errors = signupModel.getValidationErrors()
            assert.property(errors, 'name')
            // now check that 'name' is no longer an error when
            // it is set on the model
            signupModel.name = 'Troy McClure'
            errors = signupModel.getValidationErrors()
            assert.notProperty(errors, 'name')
        })
    })
})
