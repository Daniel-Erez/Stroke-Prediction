import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ClassifyService {  
  private url_xgboost = "https://s7i18gqkx3.execute-api.us-east-1.amazonaws.com/beta";
  private url_rfc ="https://km52hfjgpe.execute-api.us-east-1.amazonaws.com/beta";
  private main_url=this.url_rfc;
  private active=false
  constructor(private http: HttpClient) {
    var params={
      gender: 0,
      age: 10,
      bmi: 10,
      ever_married: 0,
      work_type: 0,
      Residence_type: 0,
      smoking_status: 0,
      hypertension: 0,
      heart_disease: 0,
      avg_glucose_level: 50,
    };
    this.classifyOne(params).subscribe((res: string) => {
      if(res==="NaN") this.active=false;
      else this.active=true;
      });
  }
;
  
  classifyOne(test: any) {
    let json = { Tests: [test] };

    return this.http.post<any>(this.main_url, JSON.stringify(json)).pipe(
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

    return this.http.post<any>(this.main_url, JSON.stringify(json)).pipe(
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

  isActive():boolean{
    return this.active;
  }
}
