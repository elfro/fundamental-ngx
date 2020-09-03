import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCardLayoutComponent } from './fixed-card-layout.component';

describe('FixedCardLayoutComponent', () => {
    let component: FixedCardLayoutComponent;
    let fixture: ComponentFixture<FixedCardLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FixedCardLayoutComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(FixedCardLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
