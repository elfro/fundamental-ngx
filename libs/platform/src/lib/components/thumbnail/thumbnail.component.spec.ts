import { Component } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ThumbnailComponent } from './thumbnail.component';
import { By } from '@angular/platform-browser';
import { PlatformThumbnailModule } from './thumbnail.module';

@Component({
    template: `<fdp-thumbnail [mediaList]="mediaList"></fdp-thumbnail>`
})
class DefaultThumbnailTestComponent {
    mediaList = [{
        thumbnailUrl: 'http://lorempixel.com/400/400/nature',
        mediaType: 'video',
        mediaUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        alt: 'Failed to load http://lorempixel.com/400/400/nature',
        label: 'nature'
    }];
    constructor() { }
}

describe('DefaultThumbnailComponent', () => {
    let component: DefaultThumbnailTestComponent;
    let fixture: ComponentFixture<DefaultThumbnailTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PlatformThumbnailModule],
            declarations: [ThumbnailComponent, DefaultThumbnailTestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DefaultThumbnailTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check for thumbnail load', () => {
        const divElement = fixture.debugElement.query(By.css('div'));
        expect(divElement.nativeElement.classList.contains('fdp-thumbnail-container')).toBe(true);
    });

    it('check for loading of video element on media type video', () => {

        const videoElement = fixture.debugElement.query(By.css('video'));
        const imageElement = fixture.debugElement.query(By.css('img'));
        expect(imageElement).toBeFalsy();
        expect(videoElement).toBeTruthy();

    });

});

@Component({
    template: `<fdp-thumbnail [mediaList]="mediaList" [isHorizontal]="true"></fdp-thumbnail>`
})
class HorizontalThumbnailTestComponent {

    mediaList = [{
        thumbnailUrl: 'http://lorempixel.com/400/400/nature',
        mediaType: 'video',
        mediaUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        alt: 'Failed to load http://lorempixel.com/400/400/nature',
        label: 'nature'
    }];
    constructor() { }
}

describe('HorizontalThumbnailComponent', () => {
    let component: HorizontalThumbnailTestComponent;
    let fixture: ComponentFixture<HorizontalThumbnailTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PlatformThumbnailModule],
            declarations: [ThumbnailComponent, HorizontalThumbnailTestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HorizontalThumbnailTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check for thumbnail load horizontal', () => {

        const divElement = fixture.debugElement.query(By.css('div'));
        expect(divElement.nativeElement.classList.contains('fdp-thumbnail-container--horizontal')).toBe(true);

    });
});

@Component({
    template: `<fdp-thumbnail [mediaList]="mediaList" [isHorizontal]="true"></fdp-thumbnail>`
})
class ImageThumbnailTestComponent {

    mediaList = [{
        thumbnailUrl: 'http://lorempixel.com/400/400/nature',
        mediaType: 'image',
        mediaUrl: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        alt: 'Failed to load http://lorempixel.com/400/400/nature',
        label: 'nature'
    }];
    constructor() { }
}

describe('ImageThumbnailComponent', () => {

    let component: ImageThumbnailTestComponent;
    let fixture: ComponentFixture<ImageThumbnailTestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PlatformThumbnailModule],
            declarations: [ThumbnailComponent, ImageThumbnailTestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ImageThumbnailTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('check for loading the Image media', () => {

        const videoElement = fixture.debugElement.query(By.css('video'));
        const imageElement = fixture.debugElement.query(By.css('img'));
        expect(imageElement).toBeTruthy();
        expect(videoElement).toBeFalsy();

    });

});
