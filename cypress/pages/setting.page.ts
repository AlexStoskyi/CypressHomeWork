class SettingsPage{
    elements = {
        singOutButton: () => cy.get(".btn.btn-outline-danger"),
    }
}
export const settingsPage = new SettingsPage();