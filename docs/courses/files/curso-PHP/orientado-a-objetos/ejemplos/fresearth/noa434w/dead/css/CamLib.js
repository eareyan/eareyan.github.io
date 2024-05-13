//
// Global My Account JavaScript Library
//

strSELECTPAYMENTTYPE = "Please select a payment type.";

// CC
strBADCARD = "Warning, this is a bad card number!\nPlease only use numbers (\"0-9\") and dashes (\"-\").";
strBADFULL = "Please re-enter your full card number.";
strBADCSV  = "Please enter a correct Card Security Verification (CSV) number.";
strBADTYPE = "Please select your correct card type.";
strNOMATCH = "The card number does not match the selected card type";

// BD
strBADBDTYPE  = "Please select your correct account type.";
strBADROUTING = "Please enter a valid Routing Number.";
strBADACCT    = "Please enter a valid Account Number.";
strBADAUTHORZ = "You must agree to the Electronic Authorization before continuing. Please enter your password beneath the Electronic Authorization.";

// name
strEMPTYNAME  = "Full Name is required information.";
strEMPTYFNAME = "First Name is required information.";
strEMPTYLNAME = "Last Name is required information.";

strBADNAME  = "Please use only letters plus the following characters in your Full Name: - (dash), . (period) and , (comma).";
strBADFNAME = "Please use only letters plus the following characters in your First Name: - (dash), . (period) and , (comma).";
strBADLNAME = "Please use only letters plus the following characters in your Last Name: - (dash), . (period) and , (comma).";

// company
strBADCOMPNAME = "Please use only letters and numbers plus the following characters in your Company name: . (period), , (comma) and - (dash)."

// address
strEMPTYADDR       = "Address 1 is required information.";
strEMPTYCITY       = "City is required information.";
strEMPTYZIPPOSTAL  = "ZIP / Postal code is required information.";

strBADADDR         = "Please use only letters and numbers plus the following characters in your Address 1: . (period), , (comma), - (dash) and # (pound sign).";
strBADADDR2        = "Please use only letters and numbers plus the following characters in your Address 2: . (period), , (comma), - (dash) and # (pound sign).";
strBADCITY         = "Please use only letters plus the following characters in your City: ' (single quote) and - (dash).";
strBADSTATE        = "State or Province is required information.";
strBADZIPCODE      = "Please enter a valid ZIP / Postal code.";
strBADUSZIP        = "Please enter a valid ZIP code. ZIP codes can be either 5 or 9 digits long. Example: 90210-0000.";
strBADPOSTAL       = "Please enter a valid Postal Code. Postal codes must be 6 characters long. Example: T2N 0E6.";
strBADCOUNTRY      = "Country is required information.";
strBADSTATECOUNTRY = "Your selected state or province does not match your selected country.";
strBADZIPCOUNTRY   = "Your zip/postal code does not match your selected country.";

// phone
strEMPTYNUMBER  = "Phone Number is required information.";
strBADNUMBER    = "Please use only numbers in your Phone Number.";

strEMPTYHNUMBER = "Home Number is required information.";
strBADHNUMBER   = "Please use only numbers in your Home Number.";
strBADWNUMBER   = "Please use only numbers in your Work Number.";
strBADFNUMBER   = "Please use only numbers in your Cell Number.";

curDateTime = new Date();
tzoffset = -(curDateTime.getTimezoneOffset()/60);

function checkCAddressForm(docAddress) {
   if(docAddress) {
      if(!isGoodInpt(docAddress.fname.value)) {
         alert(strEMPTYNAME);
         docAddress.fname.focus();
         return false;
      }
      if(!isGoodInpt(docAddress.lname.value)) {
         alert(strEMPTYNAME);
         docAddress.lname.focus();
         return false;
      }
      if(!checkAddress(docAddress))
         return false;
      docAddress.submit();
      return true;
   }
}

function trimAndAssign(obj) {
	obj.value=trim(obj.value);
}
//

//
// Used by setbillingaddress.jsp
// Checks fields billing name, address and phones
//
function checkAddressForm(docAddress) {
   if(docAddress) {
      if(!isGoodInpt(docAddress.billing_name.value)) {
         alert(strEMPTYNAME);
         return false;
      }
      if(!isGoodName(docAddress.billing_name.value)) {
         alert(strBADNAME);
         return false;
      }
      if(!checkAddress(docAddress))
      	return false;
      return true;
   }
   return false;
}
//

//
// Used by contactaddress.jsp
// Checks fields contact name, address, phone
//
function checkContactAddressForm(docAddress) {
   if(docAddress) {
      if(!isGoodInpt(docAddress.fullname.value)) {
         alert(strEMPTYNAME);
         docAddress.fullname.focus();
         return false;
      }
      if(!isGoodName(docAddress.fullname.value)) {
         alert(strBADNAME);
         docAddress.fullname.focus();
         return false;
      }
      if(!checkAddress(docAddress))
         return false;
   }
}

function isGoodName(argName)
{
   var fulllett = /[^a-zA-Z\.\,\- ]+/;
   if (!isGoodInpt(argName) || !(argName.match(fulllett) == null))
      return false;
   return true;
}

//
// Used by other js functions
// Check address and phone number(s).  Does not check for billing name.
//
function checkAddress(docAddress) {
   var addrlett = /[^a-zA-Z0-9\.\-\#\, ]+/;
   var citylett = /[^a-zA-Z'\- ]+/;
   if(!isGoodInpt(docAddress.street_address.value)) {
      alert(strEMPTYADDR);
      docAddress.street_address.focus();
      return false;
   }
   if(!(docAddress.street_address.value.match(addrlett) == null)) {
      alert(strBADADDR);
      docAddress.street_address.focus();
      return false;
   }
   if(docAddress.street_address2.value)
   {
      if(!isGoodInpt(docAddress.street_address2.value) || !(docAddress.street_address2.value.match(addrlett) == null)) 
      {
         alert(strBADADDR2);
         docAddress.street_address2.focus();
         return false;
      }
   }
   if(!isGoodInpt(docAddress.city.value)) {
      alert(strEMPTYCITY);
      docAddress.city.focus();
      return false;
   }
   if(!(docAddress.city.value.match(citylett) == null)) {
      alert(strBADCITY);
      docAddress.city.focus();
      return false;
   }
   if(!isGoodInpt(docAddress.state.value)) {
      alert(strBADSTATE);
      docAddress.state.focus();
      return false;
   }
   if(!isGoodInpt(docAddress.zip_code.value)) {
      alert(strEMPTYZIPPOSTAL);
      docAddress.zip_code.focus();
      return false;
   }
   if(!isGoodCountry(docAddress.country.value)) {
      alert(strBADCOUNTRY);
      docAddress.country.focus();
      return false;
   }
   if(!checkZip(docAddress.country.value, docAddress.zip_code.value)) {
      //alert(strBADZIPCOUNTRY);
      //docAddress.zip_code.focus();
      return false;
   }
   if(!stateMatchesCountry(docAddress.country.value, docAddress.state.value)) {
      alert(strBADSTATECOUNTRY);
      docAddress.country.focus();
      return false;
   }
   
   return checkPhones(docAddress);
}

//
// Check phone(s): work, home, fax
//   
function checkPhones(docAddress) {
   if(!isGoodInpt(docAddress.home_phone_area_code.value)) {
      // required field is empty
      alert(strEMPTYHNUMBER);
      docAddress.home_phone_area_code.focus();
      return false;
   }
   if(!isGoodPhone(docAddress.home_phone_area_code.value, 3)) {
      alert(strBADHNUMBER);
      docAddress.home_phone_area_code.focus();
      return false;
   }
   if(!isGoodInpt(docAddress.home_phone_exchange.value)) {
      alert(strEMPTYHNUMBER);
      docAddress.home_phone_exchange.focus();
      return false;
   }
   if(!isGoodPhone(docAddress.home_phone_exchange.value, 3)) {
      alert(strBADHNUMBER);
      docAddress.home_phone_exchange.focus();
      return false;
   }
   if(!isGoodInpt(docAddress.home_phone_number.value)) {
      alert(strEMPTYHNUMBER);
      docAddress.home_phone_number.focus();
      return false;
   }
   if(!isGoodPhone(docAddress.home_phone_number.value, 4)) {
      alert(strBADHNUMBER);
      docAddress.home_phone_number.focus();
      return false;
   }
   if(isGoodInpt(docAddress.work_phone_area_code.value) || isGoodInpt(docAddress.work_phone_exchange.value) || isGoodInpt(docAddress.work_phone_number.value)) {
      if(!isGoodPhone(docAddress.work_phone_area_code.value, 3)) {
         alert(strBADWNUMBER);
         docAddress.work_phone_area_code.focus();
         return false;
      }
      if(!isGoodPhone(docAddress.work_phone_exchange.value, 3)) {
         alert(strBADWNUMBER);
         docAddress.work_phone_exchange.focus();
         return false;
      }
      if(!isGoodPhone(docAddress.work_phone_number.value, 4)) {
         alert(strBADWNUMBER);
         docAddress.work_phone_number.focus();
         return false;
      }
      if(isGoodInpt(docAddress.work_phone_extension.value)) {
         if(!isGoodPhone(docAddress.work_phone_extension.value, 1)) {
            alert(strBADWNUMBER);
            docAddress.work_phone_extension.focus();
            return false;
         }
      }
   }
   if(isGoodInpt(docAddress.fax_phone_area_code.value) || isGoodInpt(docAddress.fax_phone_exchange.value) || isGoodInpt(docAddress.fax_phone_number.value)) {
      if(!isGoodPhone(docAddress.fax_phone_area_code.value, 3)) {
         alert(strBADFNUMBER);
         docAddress.fax_phone_area_code.focus();
         return false;
      }
      if(!isGoodPhone(docAddress.fax_phone_exchange.value, 3)) {
         alert(strBADFNUMBER);
         docAddress.fax_phone_exchange.focus();
         return false;
      }
      if(!isGoodPhone(docAddress.fax_phone_number.value, 4)) {
         alert(strBADFNUMBER);
         docAddress.fax_phone_number.focus();
         return false;
      }
   }
   return true;
}
//

//
// Used by setcreditcard.jsp
// Check fields CC type, acct, billing name, address. Does not check for phones.
//
function checkCCForm(docCC) {
   if(docCC) {
      if(!checkCC(docCC))
      	return false;
      return true;
   }
}
//

//
// Used by w_payment.jsp, makeonlinepayment.jsp
// Check fields CC type, acct, billing name, address, phones
// Check fields BD type, acct, billing name, address, phones
//
function checkOnLineForm(docOnline, disableVar) {
   if(docOnline) {
      
      if(docOnline.paymentType.value == "Select") {  
         docOnline.paymentType.focus();
         alert(strSELECTPAYMENTTYPE);
         return false;
      }
      else if(docOnline.paymentType.value == "CC") {
         if(!checkCC(docOnline))      // check CC info, addr info
           return false;
         if(!checkPhones(docOnline))  // check phones
           return false;
      }
      else if(docOnline.paymentType.value == "BD") {
         if(!checkBD(docOnline))      // check BD info
           return false;
         if(!checkAddress(docOnline)) // check addr, phones
           return false;
      }
      else {
         // no valid match
         docOnline.paymentType.focus();
         alert(strBADPAYMENTTYPE);
         return false;
      } 
      if (disableVar == true){
          disableSubmit();
        }
      //docOnline.submit();
      return true;
   }
   return false;
}
//

//
// Check fields CC acct, billing name, billing address. Does not check for phones.
//
function checkCC(docCC) {
	var cctype = document.getElementById('card_type').value;
   if(!isGoodType(cctype)) {
      alert(strBADTYPE);
      docCC.card_type.focus();
      return false;
   }
   var ccno = document.getElementById('cardNo').value;
   if(!isGoodCard(ccno, docCC.original_number.value)) {
      alert(strBADCARD);
      document.getElementById('cardNo').focus();
      return false;
   }
   /*
   if(!typeMatchesNumber(ccno, docCC.original_number.value, getSelected(docCC.card_type), docCC.original_type.value)) {
      alert(strNOMATCH);
      return false;
   }*/
   if(ccno == CCNumb && ccno.indexOf('*') != - 1) {
      if(getSelected(docCC.card_type) != CCType) {
         alert(strBADFULL);
         document.getElementById('cardNo').focus();
         document.getElementById('cardNo').select();
         return false;
      } /*
      if(!isGoodCSV(docCC.csv.value, getSelected(docCC.card_type))){
        alert(strBADCSV);
        docCC.csv.focus();
        return false;
      } */
   }
   else {
      if(docCC.csv.disabled == false && !isGoodCSV(docCC.csv.value, cctype)){
        alert(strBADCSV);
        docCC.csv.focus();
        return false;
      }
   }
   if(!isGoodInpt(docCC.billing_name.value)) {
      alert(strEMPTYNAME);
      docCC.billing_name.focus();
      return false;
   }
   if(!isGoodName(docCC.billing_name.value)) {
      alert(strBADNAME);
      docCC.billing_name.focus();
      return false;
   }
   var addrlett = /[^a-zA-Z0-9\.\-\#\, ]+/;
   if(!isGoodInpt(docCC.street_address.value)) {
      alert(strEMPTYADDR);
      docCC.street_address.focus();
      return false;
   }
   if(!(docCC.street_address.value.match(addrlett) == null)) {
      alert(strBADADDR);
      docCC.street_address.focus();
      return false;
   }
   if(docCC.street_address2.value)
   {
      if (!isGoodInpt(docCC.street_address2.value) || !(docCC.street_address2.value.match(addrlett) == null)) 
      {
         alert(strBADADDR2);
         docCC.street_address2.focus();
         return false;
      }
   }
   var citylett = /[^a-zA-Z'\- ]+/;
   if(!isGoodInpt(docCC.city.value)) {
      alert(strEMPTYCITY);
      docCC.city.focus();
      return false;
   }
   if((docCC.city.value.match(citylett) != null)) {
      alert(strBADCITY);
      docCC.city.focus();
      return false;
   }
   if(!isGoodInpt(getSelected(docCC.state))) {
      alert(strBADSTATE);
      docCC.state.focus();
      return false;
   }
   if(!isGoodInpt(docCC.zip_code.value)) {
      alert(strEMPTYZIPPOSTAL);
      docCC.zip_code.focus();
      return false;
   }
   if(!isGoodCountry(getSelected(docCC.country))) {
      alert(strBADCOUNTRY);
      docCC.country.focus();
      return false;
   }
   if(!checkZip(getSelected(docCC.country), docCC.zip_code.value)) {
      //alert(strBADZIPCOUNTRY);
      return false;
   }
   if(!stateMatchesCountry(docCC.country.value, docCC.state.value)) {
      alert(strBADSTATECOUNTRY);
      return false;
   }
   return true;
}
//

function isGoodCSV(csv, type) {
  // csv now applies to visa, mc, disc, amex, diners club and jcb. 
  if (type == 'VISA' || type == 'MC' || type == 'DISC' || type == 'DINR' || type == 'JCB' ) 
  {
     if (!isGoodInpt(csv) || !isNumber(csv) || !(csv.length == 3))
     {
         return false;
     }
  }  
	else if ( type == 'AMEX' ) 
  {
     if (!isGoodInpt(csv) || !isNumber(csv) || !(csv.length == 4))
     {
         return false;
     }
  }  
  return true;
}
//

function isGoodCard(newValue, oldValue) {
   arrGOODCHARS = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", " ");
   if (oldValue)
   {
      // only do this check if there was a previous CC payment type
      if(oldValue.length > 0 && newValue == oldValue)
         return true;
   }
   if(newValue.length <= 0)
      return false;
   for(x = 0; x < newValue.length; x++) {
      goodMatch = 0;
      tempChar = newValue.substring(x, x + 1);
      for(y = 0; y < arrGOODCHARS.length; y++) {
         if(arrGOODCHARS[y] == tempChar) goodMatch++;
      }
      if(goodMatch <= 0)
         return false;
   }
   newValue = trim(newValue);              // remove whitespace
   newValue = newValue.replace(/-/g, '');  // remove dashes
   if (newValue.length < 13)               // ensure there are at least 13 digits for CC
      return false;

   return true;
}
//

function isGoodType(newType) {
   arrGOODTYPES = new Array("VISA", "MC", "DISC", "AMEX", "DINR", "JCB");
   goodType = 0;
   for(y = 0; y < arrGOODTYPES.length; y++) {
      if(arrGOODTYPES[y] == newType)
         return true;
   }
   return false;
}
//

//
// Checks fields BD acc type, routing, acct, authorization passwd, billing name.
// Does not check for billing address or phones.
//
function checkBD(docBD) {
   badrouting = true;
   badaccount = true;
   badauthorz = true;
   noaccttype = true;
   badname    = true;
   emptyname  = true;
   if(docBD) {
      if(isGoodAccountType(docBD.account_type.value)) {
        noaccttype = false;
      }
      if(docBD.routing_number.value) {
         if(isNumber(docBD.routing_number.value)) {
            var tmpRoutingNum = trim(docBD.routing_number.value);  // trim whitespace
            if(tmpRoutingNum.length == 9) {
               badrouting = false;
            }
         }
      }
      if(docBD.account_number) {
         if((docBD.bd_original_number != null) && (docBD.bd_original_number.value.length > 0) && (docBD.account_number.value == docBD.bd_original_number.value)) {
            badaccount = false;
         }
         else {
            if(isNumber(docBD.account_number.value)) {
               var tmpAcctNum = trim(docBD.account_number.value);  // trim whitespace
               if(tmpAcctNum.length > 4 && tmpAcctNum.length <= 17) {
                  badaccount = false;
               }
            }
         }
      }
      if(docBD.password.value) {
         if(docBD.password.value.length > 0) {
            badauthorz = false;
         }
      }
      if(isGoodInpt(docBD.billing_name.value)) {
         emptyname = false;
      }
      if(isGoodName(docBD.billing_name.value)) {
         badname = false;
      }
      
      if(noaccttype) {
         alert(strBADBDTYPE);
         docBD.account_type.focus();
         return false;
      }
      if(badrouting) {
         alert(strBADROUTING);
         docBD.routing_number.focus();
         return false;
      }
      if(badaccount) {
         alert(strBADACCT);
         docBD.account_number.focus();
         return false;
      }
      if(badauthorz) {
         alert(strBADAUTHORZ);
         docBD.password.focus();
         return false;
      }
      if(badname) {
         alert(strBADNAME);
         docBD.billing_name.focus();
         return false;
      }
      if(emptyname) {
         alert(strEMPTYNAME);
         docBD.billing_name.focus();
         return false;
      }

      return true;
   }
}
//

function isCanadianProvince(province) {
   arrCANPROVS = new Array("AB", "BC", "MB", "NB", "NF", "NS", "NT", "ON", "PE", "QC", "SK", "YT");
   goodType = 0;
   for(y = 0; y < arrCANPROVS.length; y++) {
      if(arrCANPROVS[y] == province)
      return true;
   }
   return false;
}
//

function isGoodCountry(newCountry) {
   arrGOODTYPES = new Array("USA", "Canada");
   goodType = 0;
   for(y = 0; y < arrGOODTYPES.length; y++) {
      if(arrGOODTYPES[y] == newCountry)
      return true;
   }
   return false;
}
//

function getSelected(list) {
   var val = '';
   for(var i = list.length; i > 0; i--) {
      if(list.options[i - 1].selected) {
         val = list[i - 1].value;
      }
   }
   return val;
}
//

function checkZip(newCountry, newZip)
{
	if(newCountry == "USA")
   	{
   	    if (!isZipCode(newZip))
   	    {
   	       alert(strBADUSZIP);
   	       return false;
   	    }
   	    return true;
	}
   	if(newCountry == "Canada")
   	{  
   	    if (!isCanadianPostalCode(newZip))
   	    {
   	       alert(strBADPOSTAL);
   	       return false;
   	    }
   	    return true;
   	}
   	alert(strBADZIPCOUNTRY);
	return false;
}
//

function stateMatchesCountry(newCountry, newState) {
   if(isCanadianProvince(newState)) {
      if(newCountry == "USA")
      return false;
      if(newCountry == "Canada")
      return true;
   }
   if(newCountry == "USA")
   return true;
   return false;
}
//

function typeMatchesNumber(newValue, oldValue, newType, oldType) {
   if (oldValue && oldType)
   {
      // only do this check if there was a previous CC payment type
      if(oldValue.length > 0 && newValue == oldValue && newType == oldType)
         return true;
   }
   firstChar = newValue.substring(0, 1);
   if(newType == "VISA" && firstChar == '4')
      return true;
   if(newType == "MC" && firstChar == '5')
      return true;
   if(newType == "DISC" && firstChar == '6')
      return true;
   if(newType == "AMEX" && firstChar == "3")
      return true;
   if(newType == "DINR" && firstChar == "3")
      return true;
   if(newType == "JCB" && firstChar == "3")
      return true;
      
   return false;
}
//

function isGoodPhone(argValue, length) {
   arrGOODNUMS = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9");
   totalNums = 0;
   if(argValue.length < length)
   return false;
   for(x = 0; x < argValue.length; x++) {
      goodMatch = 0;
      tempChar = argValue.substring(x, x + 1);
      for(y = 0; y < arrGOODNUMS.length; y++) {
         if(arrGOODNUMS[y] == tempChar) {
            goodMatch++;
            totalNums++;
         }
      }
      if(goodMatch <= 0)
      return false;
   }
   return true;
}
//

function isGoodInpt(argValue) {
   var tempValue = trim(argValue);
   if(tempValue.length > 0) {
      if(tempValue != "-----") {
         return true;
      }
   }
   return false;
}
//

function cookiesEnabled() {
   document.cookie = "cookietest=cookiesEnabled";
   var pos = document.cookie.indexOf("cookietest=");
   if(pos == - 1)
   return false;
   return true;
}
//

function validateEmail(address) {
   // Takes in an emain address and returns true or false

   // checks for a min of 2 and max of 32 chars in the username
   // checks for a min of 2 chars after the final dot in the domain
   // checks for a '@' character separating username from domain
   var formatCheck = /(^.{2,32})@(.+\..{2,})$/;
   if(address && address != '') {
      if(!formatCheck.test(address)) {
         return false;
      }
   } else {
      return false;
   }
   var username = RegExp.$1;
   var domain = RegExp.$2;

   // check for bad chars in general
   var charCheck = /^[a-zA-Z0-9\.\-\_]+$/;
   if(!charCheck.test(username) || !charCheck.test(domain)) {
      return false;
   }

   // checks username
   var usernameCheck = /^(([^\-][\w\-]*?\.?){1,})$/;
   if(!usernameCheck.test(username)) {
      return false;
   }

   // checks domain
   var domainCheck = /^([^\-][\w+\.\-])[^@]{1,}[^\-]$/;
   if(!domainCheck.test(domain)) {
      return false;
   }

   return true;
}
//
function validateDomain(domain) {
   // Takes in a domain and returns true or false
	 // basically used for webhosting password reset
   // checks for a min of 2 chars after the final dot in the domain

   var formatCheck = /(.+\..{2,})$/;
   if(domain && domain != '') {
      if(!formatCheck.test(domain)) {
         return false;
      }
   } else {
      return false;
   }

   // check for bad chars in general
   var charCheck = /^[a-zA-Z0-9\.\-\_]+$/;
   if(!charCheck.test(domain)) {
      return false;
   }

   // checks domain
   var domainCheck = /^([^\-][\w+\.\-])[^@]{1,}[^\-]$/;
   if(!domainCheck.test(domain)) {
      return false;
   }

   return true;
}
//


function validateLogin(emailaddress, password) {
   if(validateEmail(trim(emailaddress))) {
   }
   else {
      alert("Please enter a valid email address");
      document.signinFrm.email.focus();
      document.signinFrm.email.select();
      return false;
   }
   if(trim(password) != '') {
   }
   else {
      alert("Please enter a password");
      document.signinFrm.password.focus();
      document.signinFrm.password.select();
      return false;
   }
   return true;
}
//

function validatePPCLogin(emailaddress, password) {
   if(trim(emailaddress) != '') {
   }
   else {
      alert("Please enter your member name");
      document.signinFrm.email.focus();
      document.signinFrm.email.select();
      return false;
   }
   if(trim(password) != '') {
   }
   else {
      alert("Please enter a password");
      document.signinFrm.password.focus();
      document.signinFrm.password.select();
      return false;
   }
   return true;
}
//

function validateDigits(number) {
   // Takes in a number value and returns true or false
   // Rules for the number regular expression:
   // Must contain only numbers 0-9
   var regex = new RegExp(/^[0-9]*$/g);
   if(number && number != '') {
      if(regex.test(number)) {
         return true;
      }
      else {
         return false;
      }
   }
   else {
      return false;
   }
}
//

function autoTabPhone(count, fill, jumpto, formname) {
   // Auto Tabs Phone Fields after set characters
   if(count >= fill) {
      if(eval("document." + formname) && eval("document." + formname + "." + jumpto)) {
         eval("document." + formname + "." + jumpto + ".focus()");
      }
   }
}
//

function select(obj, value) {
   // sets the correct value in a select statement
   var selObj = obj;
   var val = value;
   for(var z = 0; z < selObj.options.length; z++) {
      if(selObj.options[z].value == val) {
         selObj.options[z].selected = true;
      }
      //match each option against stored user pref
   }
   //loop thru select box options
}
//

function switchCSV(selBox) {
   if(selBox && selBox[selBox.selectedIndex].value && (selBox[selBox.selectedIndex].value == 'VISA' || selBox[selBox.selectedIndex].value == 'MC' || selBox[selBox.selectedIndex].value == 'DISC')) {
      if(document.creditcardchange && document.creditcardchange.csv) {
         document.creditcardchange.csv.disabled = false;
      }
      if(document.getElementById) {
         document.getElementById('CSVtd1').style.display = '';
      }
   }
   else {
      if(document.creditcardchange && document.creditcardchange.csv) {
         document.creditcardchange.csv.disabled = true;
      }
      if(document.getElementById) {
         document.getElementById('CSVtd1').style.display = 'none';
      }
   }
}
//

//
// Trim spaces before and after string.
//
function trim(str) {
   str = str.replace(/(^\s*)/g, '');
   return str.replace(/(\s*$)/g, '');
}
//

function isNumber(str) {
   if(str) {
      tempStr = trim(str);
      if((tempStr.search(/\D+/gi) == - 1) && (tempStr.length > 0))
         return true;
   }
   return false;
}
//

function isZipCode(zipCode) {
   if(zipCode) {
      // US zip codes can be in any of these forms:
      // 12345      : 5 digits
      // 12345-0000 : 5 digits - 4 digits
      // 123450000  : 9 digits, no dash

      tempZip = trim(zipCode);
      tempZip = tempZip.replace(/\-/g, '');
      // check that the zip is a valid number
      if (!isNumber(tempZip))
   	     return false;
      
      // check that the zip value is > 0   	  
   	  zipValue = parseInt(tempZip, 10);  // parse using base 10
   	  if (!zipValue || zipValue <= 0)
   	     return false;

      // check for valid zip length   	     
   	  if (tempZip.length == 5 || tempZip.length == 9)
   	     return true;
   }
   return false;
}
//

function isCanadianPostalCode(postalCode) 
{
   if(postalCode) 
   {
      // Canadian Postal Code
      // X2X3Y3  : A#A#A#, (alternating between alpha and number) no spaces
      // X2X 3Y3 : A#A #A#,(alternating between alpha and number) with spaces

      tempPostal = trim(postalCode);
      if (tempPostal.length == 6)
      {
         var regex = /[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d/;
         if(tempPostal.match(regex) != null)
            return true;
      }
      if (tempPostal.length == 7)
      {
         var regex = /[A-Za-z]\d[A-Za-z]\s\d[A-Za-z]\d/;
         if(tempPostal.match(regex) != null)
            return true;
      }
   }
   return false;
}
//

function checkBankDraft() {
   badrouting = true;
   badaccount = true;
   badauthorz = true;
   noaccttype = true;
   if(document.bankdraft) {
      if(isGoodAccountType(document.bankdraft.account_type.value)) {
        noaccttype = false;
      }
      if(document.bankdraft.routing_number.value) {
         if(isNumber(document.bankdraft.routing_number.value)) {
            if(document.bankdraft.routing_number.value.length == 9) {
               badrouting = false;
            }
         }
      }
      if(document.bankdraft.account_number) {
         if((document.bankdraft.bd_original_number.value.length > 0) && (document.bankdraft.account_number.value == document.bankdraft.bd_original_number.value)) {
            badaccount = false;
         }
         else {
            if(isNumber(document.bankdraft.account_number.value)) {
               if(document.bankdraft.account_number.value.length > 4 && document.bankdraft.account_number.value.length <= 17) {
                  badaccount = false;
               }
            }
         }
      }
      if(document.bankdraft.agreement) {
         if(document.bankdraft.agreement.checked == true) {
            badauthorz = false;
         }
      }
      if(noaccttype) {
         alert(strBADBDTYPE);
         return false;
      }
      if(badrouting) {
         alert(strBADROUTING);
         return false;
      }
      if(badaccount) {
         alert(strBADACCT);
         return false;
      }
      if(badauthorz) {
         alert(strBADAUTHORZ);
         return false;
      }
      document.bankdraft.submit();
      return true;
   }
}

//
// Used by setbankdraft.jsp
// Checks fields bank draft type, routing, acct, and password
// Does not check for billing name, address or phones.
//
function checkBankDraftPass() {
   badrouting = true;
   badaccount = true;
   badauthorz = true;
   noaccttype = true;
   if(document.bankdraft) {
      if(isGoodAccountType(document.bankdraft.account_type.value)) {
        noaccttype = false;
      }
      if(document.bankdraft.routing_number.value) {
         if(isNumber(document.bankdraft.routing_number.value)) {
            if(document.bankdraft.routing_number.value.length == 9) {
               badrouting = false;
            }
         }
      }
      if(document.bankdraft.account_number) {
         if((document.bankdraft.bd_original_number.value.length > 0) && (document.bankdraft.account_number.value == document.bankdraft.bd_original_number.value)) {
            badaccount = false;
         }
         else {
            if(isNumber(document.bankdraft.account_number.value)) {
               if(document.bankdraft.account_number.value.length > 4 && document.bankdraft.account_number.value.length <= 17) {
                  badaccount = false;
               }
            }
         }
      }
      if(document.bankdraft.password) {
         if(document.bankdraft.password.value.length > 0) {
            badauthorz = false;
         }
      }
      if(noaccttype) {
         alert(strBADBDTYPE);
         return false;
      }
      if(badrouting) {
         alert(strBADROUTING);
         return false;
      }
      if(badaccount) {
         alert(strBADACCT);
         return false;
      }
      if(badauthorz) {
         alert(strBADAUTHORZ);
         return false;
      }
      document.bankdraft.submit();
      return true;
   }
}

function checkRecurringAgreement() {
      if(document.recurringbankdraft.agreement) {
         if(document.recurringbankdraft.agreement.checked == true) {
            return true;
         }
         else {
            alert("Please agree to the monthly recurring transaction by checking the box.");
            return false;
         }
      }
}
//
function isGoodAccountType(type) {
   arrGOODTYPES = new Array("checking", "savings");
   goodType = 0;
   for(y = 0; y < arrGOODTYPES.length; y++) {
      if(arrGOODTYPES[y] == type)
      return true;
   }
   return false;
}
//

function getCookieVal(offset) {
   var endstr = document.cookie.indexOf(";", offset);
   if(endstr == - 1) endstr = document.cookie.length;
   return unescape(document.cookie.substring(offset, endstr));
}
//

function getCookie(name) {
   var arg = name + "=";
   var alen = arg.length;
   var clen = document.cookie.length;
   var i = 0;
   while(i < clen) {
      var j = i + alen;
      if(document.cookie.substring(i, j) == arg)
      return getCookieVal(j);
      i = document.cookie.indexOf(" ", i) + 1;
      if(i == 0)
      break;
   }
   return "";
}

function getZUDomain(name) {
   var cv = getCookie(name);
   var domain = "";
   if (cv != null && cv.length > 3) {
       var begin = cv.indexOf("@") + 1;
       domain = cv.substring(begin);
   }
   return domain;
}
//

function deleteCookie(name) {
   var exp = new Date();
   exp.setTime(exp.getTime() - 1);
   var cval = getCookie(name);
   document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString();
}
//

function newWindow(url){
  window.open(url,"blank","");
}
// 

function openSmallerWindow(url) {
  //calculate current size
  var myWidth = 0, myHeight = 0;
  var newWidth = 0, newHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myWidth = document.documentElement.clientWidth;
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myWidth = document.body.clientWidth;
    myHeight = document.body.clientHeight;
  }
  if (myWidth > 100) {
    newWidth = myWidth - 50;
  } else {
    newWidth = myWidth;
  }
  if (myHeight > 100) {
    newHeight = myHeight - 50;
  } else {
    newHeight = myHeight;
  }
  var args = 'menubar,scrollbar,width=' + newWidth + ',height=' + newHeight + ',location,resizable,toolbar';
  window.open(url, '', args);
}

//isIntegerInRange (STRING s, INTEGER a, INTEGER b)
function isIntegerInRange (s, a, b)
{   
	if (!isInteger(s, false)) return false;

	var num = parseInt (s);
	return ((num >= a) && (num <= b));
}

function isInteger (s)
{
   var i;

   for (i = 0; i < s.length; i++)
   {
      var c = s.charAt(i);
      if (!isDigit(c)) return false;
   }
   return true;
}

function isEmpty(s)
{
   return ((s == null) || (s.length == 0))
}

function isDigit (c)
{
   return ((c >= "0") && (c <= "9"))
}
