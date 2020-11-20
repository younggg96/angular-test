import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './must-match.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  registerForm1: FormGroup;
  registerForm2: FormGroup;
  registerForm3: FormGroup;
  registerForm4: FormGroup;
  registerForm5: FormGroup;
  registerForm6: FormGroup;
  submitted = false;
  str: any;
  formObject = {
    PersonalData: {
      FirstName: '',
      MiddelName: '',
      LastName: '',
      Email: '',
      Address1: '',
      Address2: '',
      City: '',
      State: '',
      ZipCode: '',
    },
    BusinessData: {
      BusinessLegalName: '',
      DoingBusinessAs: '',
      EIN: '',
      MerchantCategoryCode: '',
      WebsiteURL: '',
      BusinessDescription: '',
      MonthlyBankCardVolume: '',
      AverageTicket: '',
      HighestTicket: '',
      BusinessAddress1: '',
      BusinessAddress2: '',
      BusinessCity: '',
      BusinessState: '',
      BusinessZipCode: '',
    },
    AccountPayment: {
      NameOnCard: '',
      CreditCardNumber: '',
      ExpDate: '',
      AccountNumber: '',
      RoutingNumber: '',
      AccountType: '',
    },
    MailingAddress: {
      MailAddress1: '',
      MailAddress2: '',
      MailCity: '',
      MailState: '',
      MailZipCode: '',
    },
    PrimaryAccount: {
      PrimaryAccountCountryCode: '',
      PrimaryAccountName: '',
      PrimaryBankAccountNumber: '',
      PrimaryAccountOwnershipType: '',
      PrimaryAccountType: '',
      PrimaryBankName: '',
      PrimaryRoutingNumber: '',
    },
    BankAccountOwnershipDetails: {
      BankAccountFirstName: '',
      BankAccountLastName: '',
      BankAccountAddress1: '',
      BankAccountCity: '',
      BankAccountStateProvince: '',
      BankAccountPostalCode: '',
      BankAccountCountry: '',
      BankAccountPhone: '',
    }
  }

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm1 = this.formBuilder.group({
      FirstName: ['', Validators.compose([Validators.required, Validators.maxLength(20)])],
      MiddelName: ['', Validators.compose([Validators.required, Validators.maxLength(2)])],
      LastName: ['', Validators.compose([Validators.required, Validators.maxLength(25)])],
      Email: ['', Validators.compose([Validators.required, Validators.email, Validators.maxLength(55)])],
      Address1: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      Address2: ['', Validators.compose([Validators.required, Validators.maxLength(100)])],
      City: ['', Validators.compose([Validators.required, Validators.maxLength(30)])],
      State: ['', Validators.compose([Validators.required, Validators.maxLength(3)])],
      ZipCode: ['', Validators.required]
    });
    this.registerForm2 = this.formBuilder.group({
      // Business Data
      BusinessLegalName: ['', Validators.compose([Validators.required, Validators.maxLength(255)])],
      DoingBusinessAs: ['', Validators.required],
      EIN: ['', Validators.required],
      MerchantCategoryCode: ['', Validators.required],
      WebsiteURL: ['', Validators.required],
      BusinessDescription: ['', Validators.required],
      MonthlyBankCardVolume: ['', Validators.required],
      AverageTicket: ['', Validators.required],
      HighestTicket: ['', Validators.required],
      BusinessAddress1: ['', Validators.required],
      BusinessAddress2: ['', Validators.required],
      BusinessCity: ['', Validators.required],
      BusinessState: ['', Validators.required],
      BusinessZipCode: ['', Validators.required],
    });
    this.registerForm3 = this.formBuilder.group({
      // Account Payment 
      NameOnCard: ['', Validators.required],
      CreditCardNumber: ['', Validators.required],
      ExpDate: ['', Validators.required],
      AccountNumber: ['', Validators.required],
      RoutingNumber: ['', Validators.required],
      AccountType: ['', Validators.required],
    });
    this.registerForm4 = this.formBuilder.group({
      // Mailing Address
      MailAddress1: ['', Validators.required],
      MailAddress2: ['', Validators.required],
      MailCity: ['', Validators.required],
      MailState: ['', Validators.required],
      MailZipCode: ['', Validators.required],
    });
    this.registerForm5 = this.formBuilder.group({
      // Primary Account
      PrimaryAccountCountryCode: ['', Validators.required],
      PrimaryAccountName: ['', Validators.required],
      PrimaryBankAccountNumber: ['', Validators.required],
      PrimaryAccountOwnershipType: ['', Validators.required],
      PrimaryAccountType: ['', Validators.required],
      PrimaryBankName: ['', Validators.required],
      PrimaryRoutingNumber: ['', Validators.required],
    });
    this.registerForm6 = this.formBuilder.group({
      // Bank Account Ownership Details
      BankAccountFirstName: ['', Validators.required],
      BankAccountLastName: ['', Validators.required],
      BankAccountAddress1: ['', Validators.required],
      BankAccountCity: ['', Validators.required],
      BankAccountStateProvince: ['', Validators.required],
      BankAccountPostalCode: ['', Validators.required],
      BankAccountCountry: ['', Validators.required],
      BankAccountPhone: ['', Validators.required],

      AcceptTerms: [false, Validators.requiredTrue],
    });
    this.registerForm1.valueChanges.subscribe(data => {
      this.formObject.PersonalData = data;
      this.str = JSON.stringify(this.formObject, null, 4);
      console.log(JSON.stringify(this.formObject, null, 4));
    })
    this.registerForm2.valueChanges.subscribe(data => {
      this.str = JSON.stringify(this.formObject, null, 4);
      this.formObject.BusinessData = data;
    })
    this.registerForm3.valueChanges.subscribe(data => {
      this.str = JSON.stringify(this.formObject, null, 4);
      this.formObject.AccountPayment = data;
    })
    this.registerForm4.valueChanges.subscribe(data => {
      this.str = JSON.stringify(this.formObject, null, 4);
      this.formObject.MailingAddress = data;
    })
    this.registerForm5.valueChanges.subscribe(data => {
      this.str = JSON.stringify(this.formObject, null, 4);
      this.formObject.PrimaryAccount = data;
    })
    this.registerForm6.valueChanges.subscribe(data => {
      this.str = JSON.stringify(this.formObject, null, 4);
      this.formObject.BankAccountOwnershipDetails = data;
    })
    this.str = JSON.stringify(this.formObject, null, 4);
    
  }

  // convenience getter for easy access to form fields
  get f() {
    return {
      form1: this.registerForm1.controls,
      form2: this.registerForm2.controls,
      form3: this.registerForm3.controls,
      form4: this.registerForm4.controls,
      form5: this.registerForm5.controls,
      form6: this.registerForm6.controls
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm1.invalid && this.registerForm2.invalid && this.registerForm3.invalid
      && this.registerForm3.invalid && this.registerForm4.invalid && this.registerForm5.invalid && this.registerForm6.invalid
    ) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formObject, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm1.reset();
    this.registerForm2.reset();
    this.registerForm3.reset();
    this.registerForm4.reset();
    this.registerForm5.reset();
    this.registerForm6.reset();
  }
}
