<p align="center">
<img src="https://raw.githubusercontent.com/matheushf/ng2-date-countdown/master/img/finalcountdown.png" alt="Europe">
</p>

<br>
<br>
<p align="center">
Make customizables Date Countdowns with this simple and easy angular 2 component.
</p>

<br>
<br>

<p align="center">
<img src="https://raw.githubusercontent.com/matheushf/ng2-date-countdown/master/img/custom1.png" alt="Europe">
</p>

<br>

<p align="center">
<img src="https://raw.githubusercontent.com/matheushf/ng2-date-countdown/master/img/custom2.png" alt="Europe">
</p>

##Instalation

`npm install ng2-date-countdown --save`

In your `app.module`, add `CountDown` to your declarations:

```
import {CountDown} from "../components/ng2-date-countdown/countdown";

@NgModule({
   declarations: [
     AppComponent,
     CountDown
   ],
   imports: [
     BrowserModule
   ],
   bootstrap: [AppComponent]
 })
 ```

 In your html template:

 ```
 <countdown units="Days | Hours | Minutes | Seconds"  end="June 22, 2017"></countdown>
 ```

 To set a custom Language, set this variable in your component.ts file:

 ```
 text: any = {
         Weeks: "Semanas",
         Days: "Dias",
         Hours: "Horas",
         Minutes: "Minutos",
         Seconds: "Segundos",
         MilliSeconds: "Milisegundos"
     };
 ```

In your .html:

 ```
 <countdown [text]="text" units="Days | Hours | Minutes | Seconds"  end="June 22, 2017"></countdown>
 ```

To customize the Countdown (.scss), use the class from it (you can inspect from chrome elements) and put the '/deep/' before them, example:

```
    /deep/ .countdown {
      width: 100%;
      height: 100px;
      background: black;

      .two-dots {
        display: none;
      }

      .measurements {
        color: white;
        margin-right: 5px;
        padding: 10px;
     }
```

Any suggestions or doubts:
<br>
<br>
hffmatheus@gmail.com