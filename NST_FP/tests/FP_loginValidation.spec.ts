import {test} from "@playwright/test";
import { POManager } from "../PageObjects/POManager";
const invalidUser= JSON.parse(JSON.stringify(require('../Utils/TestData/FP_invalidUserCredentials.json')));
const validUser= JSON.parse(JSON.stringify(require('../Utils/TestData/FP_validUserCredentials.json')));

for(const invalidData of invalidUser)
{
test(`Validate Invalid Users ${invalidData.number}`,async ({page}) => {
   
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();

    await loginPage.goToPage();
    await loginPage.validateInvalidUserCredentials(invalidUser[invalidData.number].userName, invalidUser[invalidData.number].password, invalidUser[invalidData.number].expectedLetter);
});
}

for(const data of validUser)
{
test(`Validate Valid Users ${data.number}`,async ({page}) => {
   
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();

    await loginPage.goToPage();
    await loginPage.validateValidUserCredentials(validUser[data.number].userName, validUser[data.number].password, validUser[data.number].expectedLetter);
});
}