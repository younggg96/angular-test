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
  registerForm: FormGroup;
  submitted = false;
  str: any;
  formObject: Object = {
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
    this.registerForm = this.formBuilder.group({
      FirstName: ['', Validators.required, Validators.maxLength(20)],
      MiddelName: ['', Validators.required, Validators.maxLength(2)],
      LastName: ['', Validators.required, Validators.maxLength(25)],
      Email: ['', [Validators.required, Validators.email, Validators.maxLength(55)]],
      Address1: ['', Validators.required, Validators.maxLength(100)],
      Address2: ['', Validators.required, Validators.maxLength(100)],
      City: ['', Validators.required, Validators.maxLength(30)],
      State: ['', Validators.required, Validators.maxLength(3)],
      ZipCode: ['', Validators.required],
      // Business Data
      BusinessLegalName: ['', Validators.required, Validators.maxLength(255)],
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
      // Account Payment 
      NameOnCard: ['', Validators.required],
      CreditCardNumber: ['', Validators.required],
      ExpDate: ['', Validators.required],
      AccountNumber: ['', Validators.required],
      RoutingNumber: ['', Validators.required],
      AccountType: ['', Validators.required],
      // Mailing Address
      MailAddress1: ['', Validators.required],
      MailAddress2: ['', Validators.required],
      MailCity: ['', Validators.required],
      MailState: ['', Validators.required],
      MailZipCode: ['', Validators.required],
      // Primary Account
      PrimaryAccountCountryCode: ['', Validators.required],
      PrimaryAccountName: ['', Validators.required],
      PrimaryBankAccountNumber: ['', Validators.required],
      PrimaryAccountOwnershipType: ['', Validators.required],
      PrimaryAccountType: ['', Validators.required],
      PrimaryBankName: ['', Validators.required],
      PrimaryRoutingNumber: ['', Validators.required],
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
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    
    this.str = JSON.stringify(this.registerForm.value, null, 4);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
