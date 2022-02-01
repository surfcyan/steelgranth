import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private httpClient: HttpClient) {
  }
  private grantType: string = "client_credentials";
  private clientId: string = "33OkryzDZsJt2N7DoAZFkQ8nCP3mdxVJ7tkUjIJnxdgPPLBJyk0II4MD4cNnKLpJLyh5PIB_lqbH7Y3EQSIMeA==";
  private clientSecret: string = "lrFxI-iSEg9eBbkGuWL0S2jtVBmPlUc_2hXbD-vH4kjrx8XS5vT9Sjl5S-JIwPU47IEddGej10H6-LJbCUm5ChWQPAEo7jj8";
  private securityURL: string = "https://outpost.mapmyindia.com/api/security/v3.0.5/oauth/token?grant_type=" + this.grantType + "&client_id=" + this.clientId + "&client_secret=" + this.clientSecret;

  getToken() {
    let promise = new Promise((resolve, reject) => {
      let apiURL = this.securityURL;
      this.httpClient.post(apiURL, null)
        .toPromise()
        .then(
          res => { // Success
            resolve(res);
          }
        );
    });
    return promise;
  }

}