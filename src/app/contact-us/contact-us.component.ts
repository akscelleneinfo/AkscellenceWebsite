import { Component, OnInit } from "@angular/core";
import { MetaTagAndTitleService } from "../Service and Model/metaTags-Title.service";
import { EmailService } from "../Service and Model/email.service";
import { EmailBody } from "../Service and Model/email.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  constructor(
    private metaTagAndTitleService: MetaTagAndTitleService,
    private emailService: EmailService
  ) {}
  apiMessage: string;
  emailBody: EmailBody = {
    name: "",
    message: "",
    subject: "",
    toEmail: ""
  };

  ngOnInit() {
    this.metaTagAndTitleService.getTitleAndMetaTags(14);
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.reset();
      this.emailBody = {
        name: "",
        message: "",
        subject: "",
        toEmail: ""
      };
    }
  }

  onSubmit(form: NgForm) {
    this.emailService.sendMail(form.value).subscribe((data: any) => {
      this.resetForm(form);
      this.apiMessage = data;
      // console.log("This is API Message:- " + this.apiMessage);
      alert(this.apiMessage);
    });
  }
}
