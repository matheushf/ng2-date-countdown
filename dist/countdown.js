"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@angular/core");
let CountDown = class CountDown {
    constructor() {
        this.displayString = '';
        this.reached = new core_1.EventEmitter();
        this.display = [];
        this.displayNumbers = [];
        this.wasReached = false;
        setInterval(() => this._displayString(), 100);
    }
    _displayString() {
        if (typeof this.units === 'string') {
            this.units = this.units.split('|');
        }
        let givenDate = new Date(this.end);
        let now = new Date();
        let dateDifference = givenDate - now;
        if (dateDifference < 100 && dateDifference > 0 && !this.wasReached) {
            this.wasReached = true;
            this.reached.next(now);
        }
        let lastUnit = this.units[this.units.length - 1], unitConstantForMillisecs = {
            year: (((1000 * 60 * 60 * 24 * 7) * 4) * 12),
            month: ((1000 * 60 * 60 * 24 * 7) * 4),
            weeks: (1000 * 60 * 60 * 24 * 7),
            days: (1000 * 60 * 60 * 24),
            hours: (1000 * 60 * 60),
            minutes: (1000 * 60),
            seconds: 1000
        }, unitsLeft = {}, returnText = '', returnNumbers = '', totalMillisecsLeft = dateDifference, i, unit;
        for (i in this.units) {
            if (this.units.hasOwnProperty(i)) {
                unit = this.units[i].trim();
                if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
                    //$interval.cancel(countDownInterval);
                    throw new Error('Cannot repeat unit: ' + unit);
                }
                if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
                    throw new Error('Unit: ' + unit + ' is not supported. Please use following units: year, month, weeks, days, hours, minutes, seconds, milliseconds');
                }
                unitsLeft[unit] = totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];
                if (lastUnit === unit) {
                    unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
                }
                else {
                    unitsLeft[unit] = Math.floor(unitsLeft[unit]);
                }
                totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];
                unitConstantForMillisecs[unit.toLowerCase()] = false;
                returnNumbers += ' ' + unitsLeft[unit] + ' | ';
                returnText += ' ' + unit;
            }
        }
        if (this.text === null || !this.text) {
            this.text = {
                Year: 'Year',
                Month: 'Month',
                Weeks: 'Weeks',
                Days: 'Days',
                Hours: 'Hours',
                Minutes: 'Minutes',
                Seconds: 'Seconds',
                MilliSeconds: 'Milliseconds'
            };
        }
        this.displayString = returnText
            .replace('Year', this.text.Year + ' | ')
            .replace('Month', this.text.Month + ' | ')
            .replace('Weeks', this.text.Weeks + ' | ')
            .replace('Days', this.text.Days + ' | ')
            .replace('Hours', this.text.Hours + ' | ')
            .replace('Minutes', this.text.Minutes + ' | ')
            .replace('Seconds', this.text.Seconds);
        this.displayNumbers = returnNumbers.split('|');
        this.display = this.displayString.split('|');
    }
};
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CountDown.prototype, "units", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CountDown.prototype, "end", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", String)
], CountDown.prototype, "displayString", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CountDown.prototype, "text", void 0);
tslib_1.__decorate([
    core_1.Input(),
    tslib_1.__metadata("design:type", Object)
], CountDown.prototype, "divider", void 0);
tslib_1.__decorate([
    core_1.Output(),
    tslib_1.__metadata("design:type", core_1.EventEmitter)
], CountDown.prototype, "reached", void 0);
CountDown = tslib_1.__decorate([
    core_1.Component({
        // moduleId: module.id,
        selector: 'countdown',
        template: `
    <div class="countdown">
      <div *ngFor="let time of display; let i = index" class="measurements {{time}}">
        <p class="measurements-number"> {{displayNumbers[i]}} </p>
        <span *ngIf="display[i+1]" class="divider"> {{divider}} </span>
        <p class="measurements-text">
          {{time}}      
        </p>
      </div>
    </div>
    <ng-content></ng-content>
  `,
        styles: [`
    .countdown{display:flex;align-items:center;justify-content:center;align-content:center;font-family:"Helvetica Neue", Helvetica, Arial, sans-serif}.countdown .measurements{flex:0.1}.countdown .measurements .divider{float:right}
  `]
    }),
    tslib_1.__metadata("design:paramtypes", [])
], CountDown);
exports.CountDown = CountDown;
//# sourceMappingURL=countdown.js.map