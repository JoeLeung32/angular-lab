import {Component, OnInit} from '@angular/core';
import {Input, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
    selector: 'app-emily',
    templateUrl: './emily.component.html',
    styleUrls: ['./emily.component.scss']
})
export class EmilyComponent implements OnInit {

    default = 12;
    @Input() color = '';
    @Input() size: number | string = 0;
    @Output() sizeChange = new EventEmitter<number>();

    constructor() {
        this.reset(this.default);
    }

    ngOnInit(): void {
    }

    reset(value: number): void {
        this.size = value;
        this.sizeChange.emit(this.size);
    }

    reduce(): void {
        this.resize(-1);
    }

    add(): void {
        this.resize(+1);
    }

    resize(delta: number): void {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    }

}
