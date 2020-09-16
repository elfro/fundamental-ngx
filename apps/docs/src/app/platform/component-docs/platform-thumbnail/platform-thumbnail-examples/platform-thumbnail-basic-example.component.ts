import { Component } from '@angular/core';



@Component({
    selector: 'fdp-thumbnail-basic-example',
    templateUrl: './platform-thumbnail-basic-example.component.html'
})
export class PlatformThumbnailBasicExampleComponent {

    data: any = [{
        thumbnailUrl: 'http://lorempixel.com/400/400/nature',
        mediaType: 'image',
        mediaUrl: 'http://lorempixel.com/400/400/nature',
        alt: 'Failed to load http://lorempixel.com/400/400/nature',
        label: 'nature'
    },
    {
        thumbnailUrl: 'http://lorempixel.com/400/400/',
        mediaType: 'image',
        mediaUrl: 'http://lorempixel.com/400/400/',
        alt: 'Failed to load http://lorempixel.com/400/400/',
        label: 'animal'
    },

    {
        thumbnailUrl: 'http://lorempixel.com/g/400/200/',
        mediaType: 'image',
        mediaUrl: 'http://lorempixel.com/g/400/200/',
        alt: 'Failed to load http://lorempixel.com/g/400/200/',
        label: 'culture'
    },
    {
        thumbnailUrl: 'http://lorempixel.com/400/200/sports/1/',
        mediaType: 'image',
        mediaUrl: 'http://lorempixel.com/400/200/sports/1/',
        alt: 'Failed to load http://lorempixel.com/400/200/sports/1/',
        label: 'dance'
    },
    {
        thumbnailUrl: 'http://lorempixel.com/400/400/nature',
        mediaType: 'image',
        mediaUrl: 'http://lorempixel.com/400/400/nature',
        alt: 'Failed to load http://lorempixel.com/400/400/nature',
        label: 'nature'
    }
    ];

}
