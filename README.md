<p align="center">
<img src="https://raw.githubusercontent.com/matheushf/ng2-date-countdown/master/img/finalcountdown.png" alt="Europe">
</p>

<br>
<br>

## Make customizables Date Countdowns with this simple and easy angular 8 component.

(`--prod` compatible)
<br>
<br>

<p align="center">
<img width="80%" src="https://raw.githubusercontent.com/matheushf/ng2-date-countdown/master/img/custom1.png" alt="Europe">
</p>

<br>

<p align="center">
<img width="80%" src="https://raw.githubusercontent.com/matheushf/ng2-date-countdown/master/img/custom3.png" alt="Europe">
</p>

<br>

<p align="center">
<img width="80%" src="https://raw.githubusercontent.com/matheushf/ng2-date-countdown/master/img/custom2.png" alt="Europe">
</p>

<br>

**Fork https://github.com/matheushf/ng2-date-countdown**

<br>

## Instalation

`npm install ng2-date-countdown --save`

In your `app.module`, add `CountdownModule` to your imports:

```
import { CountdownModule } from "ng2-date-countdown";

@NgModule({
   declarations: [
     AppComponent
   ],
   imports: [
     BrowserModule,
     CountdownModule
   ],
   bootstrap: [AppComponent]
 })
 ```

## Usage

 `(reached)="someFunction($event)" You can use a Callback function for when it reaches 0" `

 `[text]: Change the text displayed in the date `

 `[units]: Choose wich units do you wanna display `

 `[divider]: Choose what do you want to divade the dates ` 

 `[showZeros]: Choose if you want to show a zero before the number '01 Days'`

 In your html template:

 ```
 <countdown units="Year | Month | Days | Hours | Minutes | Seconds"  end="July 22, 2019"></countdown>
 ```

 To set a custom Language and divider, set this variable in your component.ts file:

 ```
 text:any = {
     Year: 'Year',
     Month: 'Month',
     Weeks: "Weeks",
     Days: "Days",
     Hours: "Hours",
     Minutes: "Minutes",
     Seconds: "Seconds",
     MilliSeconds: "MilliSeconds"
   };
 ```

In your .html:

 ```
 <countdown (reached)="callback($event)" [text]="text" units="Year | Month | Days | Hours | Minutes | Seconds"  end="July 22, 2019"></countdown>
 ```

To customize the Countdown (.scss), use the class from it (you can inspect from chrome elements) and put the '/deep/' before them, example:

```
    /deep/ .countdown {
      width: 100%;
      height: 100px;
      background: black;

      .measurements {
        color: white;
        margin-right: 5px;
        padding: 10px;
     }

     .divider {
      font-size: 30px;
     }
```

(inspired on [angular-simple-countdown](https://github.com/previousdeveloper/angular2-simple-countdown))
