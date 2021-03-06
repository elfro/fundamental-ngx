import { AfterViewInit, Component, Injectable } from '@angular/core';
import { CalendarI18n, CalendarI18nLabels, FdDate } from '@fundamental-ngx/core';

// The weekdays translations have to start with Sunday
const localized_values = {
    fr: {
        weekdays: ['Di', 'Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
        fullMonths: [
            'Janvier',
            'Février',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Aout',
            'Septembre',
            'Octobre',
            'Novembre',
            'Décembre'
        ]
    },
    de: {
        weekdays: ['Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag', 'Montag'],
        months: [' Jän', 'Feb', 'März', 'Apr', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dez'],
        fullMonths: [
            'Januar',
            'Februar',
            'März',
            'April',
            'Mai',
            'Juni',
            'Juli',
            'August',
            'September',
            'Oktober',
            'November',
            'Dezember'
        ]
    },
    bg: {
        weekdays: ['неделя', 'понеделник', 'вторник', 'сряда', 'четвъртък', 'петък', 'събота'],
        months: [' яну', 'фев', 'март', 'апр', 'май', 'юни', 'юли', 'авг', 'септ', 'окт', 'ное', 'дек'],
        fullMonths: [
            'януари',
            'февруари',
            'март',
            'април',
            'май',
            'юни',
            'юли',
            'август',
            'септември',
            'октомври',
            'ноември',
            'декември'
        ]
    }
};

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    selectedLanguage = 'bg';

    setLanguage(newLanguage: string): void {
        this.selectedLanguage = newLanguage;
    }

    getLanguage(): string {
        return this.selectedLanguage;
    }
}

@Injectable()
export class CustomCalendarI18n extends CalendarI18n {
    constructor(private languageService: LanguageService) {
        super();
    }

    getDayAriaLabel(date: Date): string {
        return (
            date.getDate() +
            ' ' +
            localized_values[this.languageService.getLanguage()].fullMonths[date.getMonth()] +
            ' ' +
            date.getFullYear()
        );
    }

    getAllFullMonthNames(): string[] {
        return localized_values[this.languageService.getLanguage()].fullMonths;
    }

    getAllShortMonthNames(): string[] {
        return localized_values[this.languageService.getLanguage()].months;
    }

    getAllShortWeekdays(): string[] {
        return localized_values[this.languageService.getLanguage()].weekdays;
    }
}

// Aria labels i18n
@Injectable()
export class CustomI18nLabels extends CalendarI18nLabels {
    yearSelectionLabel = 'Sélection de l\'année';

    previousYearLabel = 'Année précédente';

    nextYearLabel = 'Année suivante';

    monthSelectionLabel = 'Sélection du mois';

    previousMonthLabel = 'Mois précédent';

    nextMonthLabel = 'Mois suivant';
}

@Component({
    selector: 'fd-datepicker-i18n-example',
    template: `
        <label fd-form-label for="language">Select language:</label>
        <fd-segmented-button id="language" style="margin-bottom:20px">
            <button fd-button (click)="setFrench()" [class]="isSelected('fr')">French</button>
            <button fd-button (click)="setGerman()" [class]="isSelected('de')">German</button>
            <button fd-button (click)="setBulgarian()" [class]="isSelected('bg')">
                Bulgarian
            </button>
        </fd-segmented-button>
        <br />
        <fd-date-picker [(ngModel)]="date" [startingDayOfWeek]="1"></fd-date-picker>
    `,

    // Note that this can be provided in the root of your application.
    providers: [
        {
            provide: CalendarI18n,
            useClass: CustomCalendarI18n
        },
        {
            provide: CalendarI18nLabels,
            useClass: CustomI18nLabels
        }
    ]
})
export class DatePickerI18nExampleComponent implements AfterViewInit {
    selected = 3;

    constructor(
        private languageService: LanguageService,
        private calendarI18n: CalendarI18n,
        private calendarI18nLabels: CalendarI18nLabels
    ) {}

    date = FdDate.getToday();

    isSelected(language: string): string {
        switch (language) {
            case 'fr': {
                return this.selected === 1 ? 'is-selected' : '';
            }
            case 'de': {
                return this.selected === 2 ? 'is-selected' : '';
            }
            case 'bg': {
                return this.selected === 3 ? 'is-selected' : '';
            }
        }
    }

    setGerman(): void {
        this.selected = 2;
        this.languageService.setLanguage('de');
        this.refresh();
    }

    setFrench(): void {
        this.selected = 1;
        this.languageService.setLanguage('fr');
        this.refresh();
    }

    setBulgarian(): void {
        this.selected = 3;
        this.languageService.setLanguage('bg');
        this.refresh();
    }

    ngAfterViewInit(): void {
        this.refresh();
    }

    private refresh(): void {
        this.calendarI18n.i18nChange.next();
        this.calendarI18nLabels.labelsChange.next();
    }
}
