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
    let json = { Tests: [test] };

    return this.http.post<any>(this.url, JSON.stringify(json)).pipe(
      map((res) => {
        if (res.statusCode == 200) {
          //console.log(res);
          let final: string = res.body;
          //console.log(final);
          return final.replace("[", "").replace("]", "");
        } else {//if (res.statusCode == 400) 
          return "NaN"
        }
      })
    );
  }

  classifyMany(testsList: any) {
    let json = { Tests: testsList };

    return this.http.post<any>(this.url, JSON.stringify(json)).pipe(
      map((res) => {
        if (res.statusCode == 200) {
          //console.log(res);
          let final: string = res.body;
          //console.log(final);
          final = final.replace("[", "").replace("]", "");
          return final.split(", ");
        } else{// if (res.statusCode == 400) 
          let ret=[];
          for (let i=0;i<testsList.length;i++){
              ret.push("NaN")
          }
          return ret
        }
      })
    );
  }
}
