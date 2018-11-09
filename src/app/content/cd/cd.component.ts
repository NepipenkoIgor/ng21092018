import { Component, OnInit } from '@angular/core';

export class Profile {
    public constructor(
        public firstName: string,
        public lastName: string,
    ) {}


    public lastChanged(): Date {
        return new Date();
    }
}


@Component({
    selector: 'course-cd',
    templateUrl: './cd.component.html',
    styleUrls: ['./cd.component.css']
})
export class CdComponent implements OnInit {

    public profile1!: Profile;
    public profile2!: Profile;

    public ngOnInit(): void {
        this.profile1 = new Profile('Igor', 'Nepipenko');
        this.profile2 = new Profile('Vladimir', 'Loban');

        setTimeout(() => {
            this.profile1.firstName = 'Jon';
            this.profile2.firstName = 'Ben';
        }, 5000);
        setTimeout(() => {
            this.profile2 = new Profile('Ben', 'Loban');
        }, 10000);
    }

}
