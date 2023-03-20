import { expect, Page } from "@playwright/test";

export class LoginPage
{
    readonly page: Page;
    readonly invalidLetter;
    readonly validLetter;
    readonly loginButton;
    readonly passwordTextbox;
    readonly usernameTextbox;

    constructor(page: Page)
    {
        this.page= page;
        this.usernameTextbox= page.locator("#username");
        this.passwordTextbox= page.locator("#password");
        this.loginButton= page.locator(".btn-sm[type= 'submit']");
        this.invalidLetter= page.locator("[role= 'alert']");
        this.validLetter= page.locator(".big-title");
    }

    async goToPage()
    {
        await this.page.goto("https://focalpointqa.nearshoretechnology.com/login");
    }

    async validateInvalidUserCredentials(_userName: string, _password: string, _expectedLetter: string)
    {
        await this.usernameTextbox.type(_userName);
        await this.passwordTextbox.type(_password);
        await this.loginButton.click();

        if(_expectedLetter === "n/a")
        {
            expect(this.page.url().match("https://focalpointqa.nearshoretechnology.com/login"));
        } else {
            await expect(this.invalidLetter).toHaveText(_expectedLetter);
        }
    }

    async validateValidUserCredentials(_userName: string, _password: string, _expectedLetter: string)
    {
        await this.usernameTextbox.type(_userName);
        await this.passwordTextbox.type(_password);
        await this.loginButton.click();

        // const letters= ['Finance Manager Dashboard', 'Resource Manager Dashboard', 'Administration Dashboard', 
        // 'Human Resource Manager Dashboard', 'My Timesheets', 'Project Manager Dashboard'];

        await expect(this.validLetter).toHaveText(_expectedLetter);
    }
}