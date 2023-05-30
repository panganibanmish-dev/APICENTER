class ProfilePage {
    elements = {
        btnAccount: () => cy.get("button[class='nav_link']"),
        btnProfile: () => cy.get(".nav_link.active.nav_sublink"),
        uploadProfilePhoto: () => cy.get("#choose-photo"),
        dropdownProfileLanguage: () => cy.get("li[id='user-profile_language-0'] span[class='multiselect__option--highlight multiselect__option']"),
        btnUpdateProfile: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(4) > div:nth-child(2) > button:nth-child(2)"),
        inputFirstname: () => cy.get("#user-first_name"),
        inputLastname: () => cy.get("#user-last_name"),
        inputPhonenumber: () => cy.get("#user-phone_number"),
        inputEmail: () => cy.get("#user-email_address"),
        btnUpdateInfo: () =>
            cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > button:nth-child(2)"),
        inputAddress: () => cy.get("#user-billing_address"),
        inputAddress2: () => cy.get("#user-billing_address_line_2"),
        inputCity: () => cy.get("#user-billing_city"),
        inputState: () => cy.get("#user-billing_state"),
        inputZip: () => cy.get("#user-billing_zip"),
        clickCountry: () => cy.get("#user-billing_country-175"),
        btnUpdateBilling: () => cy.get("body > div:nth-child(1) > main:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > form:nth-child(2) > div:nth-child(5) > button:nth-child(2)"),
        btnEnable: () => cy.get("div[class='mt-5'] div span span button[type='button']"),
        inputConfirmPass: () => cy.get("input[placeholder='Password']"),
        btnConfirm: () => cy.get(".button.ml-3"),
        btnCancel: () => cy.get("div[aria-expanded='true'] button[class='button button_cancel']"),
        btnDeleteAccount: () => cy.get("div[class='form_row'] button[type='button']"),
        toggleDeleteAccount: () => cy.get(".form_knob text_normal mb-0"),
        btnDeletePermanently: () => cy.get("#confirm-delete-button"),
        btnCancelAccount: () => cy.get("div[class='modal__action pb-2'] button[type='button']"),
    }

    goToProfile = () => {
        cy.viewport(1280, 768)
        cy.visit('/dashboard/account/profile')
        cy.wait(3000)
    }

}

module.exports = new ProfilePage(); 