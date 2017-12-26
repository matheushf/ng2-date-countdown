import { EventEmitter } from '@angular/core';
export declare class CountDown {
    units: any;
    end: any;
    displayString: string;
    text: any;
    divider: any;
    reached: EventEmitter<Date>;
    display: any;
    displayNumbers: any;
    private wasReached;
    constructor();
    _displayString(): void;
}
