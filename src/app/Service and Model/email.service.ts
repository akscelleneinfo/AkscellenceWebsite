import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { EmailBody } from "./email.model";

Injectable();
export class EmailService {
  readonly rootURL = "https://sendmailservice.akscellenceinfo.com"; // "http://localhost:54500"; // "http://localhost:5680"; //"http://sendmailservice.akscellenceinfo.com"; //
  constructor(private httpClient: HttpClient) {}

  sendMail(emailBody: EmailBody) {
    const body: EmailBody = {
      name: emailBody.name,
      toEmail: emailBody.toEmail,
      subject: emailBody.subject,
      message: emailBody.message,
      mailType: emailBody.mailType = "AksContectUs"
    };

    var reqHeader = new HttpHeaders({
      "Content-Type": "application/json",
      "No-Auth": "True"
    });
    return this.httpClient.post(this.rootURL + "/api/SendMail/Send", body, {
      headers: reqHeader
    });
  }
}
