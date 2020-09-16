import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

export class Media {
    thumbnailUrl: string;
    mediaType: string;
    mediaUrl: string;
    alt: string;
    label: string;
}


export class ThumbnailClickedEvent<T extends ThumbnailComponent = ThumbnailComponent, K = Media> {
    constructor(
        /** The source Thumbnail Component of the event. */
        public source: T,
        /** The new value of a control. */
        public payload: K
    ) { }
}
@Component({
    selector: 'fdp-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ThumbnailComponent implements OnInit {

    /** variable to input any type of object. */
    @Input()
    mediaList: Media[];

    @Input()
    isHorizontal = false;

    selectedMedia: Media;

    @Output()
    thumbNailClicked: EventEmitter<ThumbnailClickedEvent> = new EventEmitter();


    ngOnInit(): void {
        this.selectedMedia = this.mediaList[0];
    }

    thumbNailClickHandle(selectedMedia: Media): void {

        this.selectedMedia = selectedMedia;
        this.thumbNailClicked.emit(this.createClickEvent(this.selectedMedia));

    }

    /**@hidden
     * Create Thumbnail click event instance
     */
    createClickEvent(value: Media): ThumbnailClickedEvent {
        return new ThumbnailClickedEvent(this, value);
    }

}
