import {Locator, Page} from "@playwright/test";
import {LoginPage} from "./LoginPage";

//https://focalpointqa.nearshoretechnology.com/login

export class POManager
{
    readonly page: Page;
    readonly loginPage: LoginPage;

    constructor(page: Page)
    {
        this.page= page;
        this.loginPage= new LoginPage(this.page);
        
    }

    getLoginPage()
    {
        return this.loginPage;
    }
}
