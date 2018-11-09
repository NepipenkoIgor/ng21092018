import { ChangeDetectorRef, Component, Input, NgZone } from '@angular/core';
import { Profile } from '../cd.component';

declare var vk: any;

@Component({
    selector: 'course-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent {

    @Input()
    public profile!: Profile;

    public constructor(
        private _cd: ChangeDetectorRef,
        private _ngZone: NgZone
    ) {
        this._cd.detach();

        vk.getUsers(() => {
            this._ngZone.runOutsideAngular(() => {
                // binding
            });
        });

        setTimeout(() => {
            this._cd.reattach();
        }, 7000);
    }
}
