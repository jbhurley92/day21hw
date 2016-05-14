/**
 * A set of functions that validate an input (string) and return a
 * boolean value indicating whether the provided string matches the
 * specified pattern.
 */
module.exports = {
    /**
     * A valid name includes alphabetic characters or hyphens, and must
     * be at least two characters long.
     */
    name: function (input) {
        var nameExp = new RegExp('^([a-zA-Z]{2,})+[-]?[a-zA-Z]*[ ]*[a-zA-Z]*$');

//      console.log(input);
        return nameExp.test(input);
        // test the `input` string on the regex
    },
/////////////////////////////////////////
    /**
     * A valid phone number may or may not include an area code. If it
     * does, it should be a total of ten digits. If it doesn't, it should
     * be a total of seven digits.
     */
    phone: function (input) {
        var phoneExp = new RegExp('^[ (]*([0-9]{3})*[ )]*([0-9]{3})*[ ]?[-]?([0-9]{4})$');

//      console.log(input);
        return phoneExp.test(input);
    },

////////////////////////////////////////////////////////////////
    /**
     * A valid email address includes alphanumeric characters, underscores,
     * or periods before the @ symbol, followed by an @, followed by a valid
     * domain name.
     */
    email: function (input) {
        var emailExp = new RegExp('^[a-zA-Z0-9._-]+[@]?[a-zA-Z0-9]+[.]+[a-zA-Z0-9]+[.]*[a-zA-Z0-9]*$');

//      console.log(input);
        return emailExp.test(input);
    },

//////////////////////////////////////////////////////////////
    /**
     * A valid street address includes a building number, followed by a
     * street name, followed by either {Ave, St, Park, Lane, Blvd}. It
     * does not include city name, state name, country, zip code, or any
     * other information.
     */
    address: function (input) {
        var addressExp = new RegExp('^([0-9]+)[ ]([a-zA-Z ]+) ([Ave|St|Park|Lane|Blvd]+)$');

    //    console.log(input);
        return addressExp.test(input);
    },

//////////////////////////////////////////////////////////////
    /**
     * A valid username is between four and sixteen characters long and
     * can contain numbers or letters. It must start with a letter.
     */
    username: function (input) {
        var usernameExp = new RegExp('^[a-zA-Z]{1}[a-zA-Z0-9]{3,15}$');

//        console.log(input);
        return usernameExp.test(input);
    },
    //////////////////////////////////////////
    /**
     * A valid URL contains the protocol (http, https) as well as a valid
     * domain name. It can include any number of subdirectories, and may or
     * may not end with a file name.
     */
    url: function (input) {
        var doesItWork = '';
        var urlExp = new RegExp('^([https]{4,5}[://]{3})([A-Za-z0-9/._-]+)$');

        var valid = urlExp.exec(input);
//      console.log(valid);
        if(valid === null){
            return false;
        }
        doesItWork = valid[1] + valid[2];
//      console.log(doesItWork);
        return true;
    },
    //////////////////////////////////////////////////
    /**
     * A valid IPv4 address is split into four sections with a period between
     * each section. Each section can include from one to three digits.
     */
    ipaddr: function (input) {
        var workDeWork = '';
        var ipaddrExp = new RegExp('^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$');

        console.log(ipaddrExp.test(input));

        var IpValidAdd = ipaddrExp.exec(input);
        if(IpValidAdd === null){
            return false;
        }
        workDeWork = IpValidAdd[1] + '.' + IpValidAdd[2] + '.' + IpValidAdd[3] + '.' + IpValidAdd[4];
        return true;
    },
};
