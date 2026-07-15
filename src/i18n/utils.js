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
    },
    en: {
        'nav.home': 'Home',
        'nav.productions': 'Productions',
        'nav.about': 'About',
        'nav.cv': 'CV',
        'nav.contact': 'Contact',
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
