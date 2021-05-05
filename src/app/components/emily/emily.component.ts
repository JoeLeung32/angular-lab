import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
    selector: 'app-emily',
    templateUrl: './emily.component.html',
    styleUrls: ['./emily.component.scss']
})
export class EmilyComponent implements OnInit, OnChanges {

    @ViewChild('lastUpdate', { static: true }) lastUpdate?: ElementRef;

    default = 12;
    smallClass = [''];
    @Input() color = '';
    @Input() size: number | string = 0;
    @Output() sizeChange = new EventEmitter<number | string>();

    constructor() {
        this.reset(this.default);
    }

    ngOnInit(): void {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.update('ngOnChanges');
    }

    reset(value: number): void {
        this.size = value;
        this.update('reset');
    }

    reduce(): void {
        this.resize(-1);
    }

    add(): void {
        this.resize(+1);
    }

    resize(delta: number): void {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.update('resize');
    }

    update(from: string): void {
        const date = new Date().toLocaleString();
        this.sizeChange.emit(this.size);
        if (this.lastUpdate) {
            this.smallClass.push('animation-play');
            this.lastUpdate.nativeElement.innerHTML = `${date}, from <strong>${from}</strong>`;
            setTimeout(() => {
                delete this.smallClass[this.smallClass.indexOf('animation-play')];
                this.smallClass = Array.from(new Set(this.smallClass));
            }, 1200);
        }
    }

}
