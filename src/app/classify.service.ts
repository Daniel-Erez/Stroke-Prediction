import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClassifyService {
  constructor(private http: HttpClient) {}
  private url = "https://s7i18gqkx3.execute-api.us-east-1.amazonaws.com/beta";

  classifyOne(test: any) {
    let json = { "Tests": [test]};
    console.log(test);
    console.log(json);
    
    return this.http.post<any>(this.url, JSON.stringify(json)).pipe(
      map((res) => {
        console.log(res);
      })
    );
  }
}
