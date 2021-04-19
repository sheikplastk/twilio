const accountInfo1 = require("../../options/accountInfo1");
const accountInfo2 = require("../../options/accountInfo2");
const redirectWelcome = require("../../options/redirectWelcome")
const customerRep = require("../../options/customerRep")
const accountBalance = require("../../options/accountBalance");
const lastTransaction = require("../../options/lastTransaction");
const rewardPoints = require("../../options/rewardPoints");
const accountMenu = require("../../options/accountMenu")

module.exports = function activateCardFinal(digits) {
    // console.log("account1")
    // console.log("digits")
    // console.log(typeof digits)
    console.log("Activate Final")
    console.log(digits)
    const optionActions = {
      '9': redirectWelcome,
    };
    // const digit = '2'
    // console.log("digit")
    // console.log(typeof digit)
    return (optionActions[digits])
      ? optionActions[digits]()
      : redirectWelcome();
};