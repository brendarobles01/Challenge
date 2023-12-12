module.exports = {
    elements: {
      containerData: '#checkout_info',
      firstNameInput: 'input[id="first-name"]',
      lastNameInput: 'input[id="last-name"]',
      zipCodeInput: 'input[id="postal-code"]',
      value: 'input[class="input_error form_input"]'

    },
    commands:{
      dataForm(name, lastname, zipcode) {
        return this
          .setValue('@firstNameInput', name)
          .setValue('@lastNameInput', lastname)
          .setValue('@zipCodeInput', zipcode);
      },
      getvaluesFunction(valueName, valueResult){
        return this
        .getValue(valueName, function(result) {
          console.log('Actual Name:', result.value);
          this.assert.equal(result.value, valueResult)
        })

      },
      updateInputText(nameValue, newValue){
        return this
        .waitForElementVisible('@firstNameInput', 5000)
        .pause(100)
        .getvaluesFunction('@firstNameInput',nameValue)
        .waitForElementVisible('@firstNameInput', 10000)
        .clearValue('@firstNameInput')
        .setValue('@firstNameInput', newValue)
        .getvaluesFunction('@firstNameInput',newValue)
      }
    },
  };