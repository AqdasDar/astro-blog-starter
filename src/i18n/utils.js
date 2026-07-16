export const languages = {
    en: 'English',
    fr: 'Français',
};

export const defaultLang = 'fr';

export const ui = {
    fr: {
        'nav.home': 'Accueil',
        'nav.productions': 'Productions',
        'nav.about': 'À Propos',
        'nav.cv': 'CV',
        'nav.contact': 'Contact',
        'footer.rights': 'Tous droits réservés.',
        'filter.label': 'Filtrer :',
        'filter.all': 'Tous',
        'sort.label': 'Trier par :',
        'sort.dateDesc': 'Date (plus récent)',
        'sort.dateAsc': 'Date (plus ancien)',
        'sort.titleAsc': 'Titre (A-Z)',
    },
    en: {
        'nav.home': 'Home',
        'nav.productions': 'Productions',
        'nav.about': 'About',
        'nav.cv': 'CV',
        'nav.contact': 'Contact',
        'footer.rights': 'All rights reserved.',
        'filter.label': 'Filter:',
        'filter.all': 'All',
        'sort.label': 'Sort by:',
        'sort.dateDesc': 'Date (newest)',
        'sort.dateAsc': 'Date (oldest)',
        'sort.titleAsc': 'Title (A-Z)',
    },
}

export function getLangFromUrl(url) {
    const [, lang] = url.pathname.split('/');
    if (lang in languages) return lang;
    return defaultLang;
}

export function useTranslations(lang) {
    return function t(key) {
        return ui[lang][key] || ui[defaultLang][key];
    }
}
