import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const changeLanguage = (language: any) => {
        setSelectedLanguage(language);
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

    const languages = [
        { code: 'en', name: 'EN' },
        { code: 'de', name: 'DE' },
        { code: 'pt', name: 'PT' },
    ];

    return (
        <div className="relative">
            <button
                className="px-4 py-2 bg-transparent text-white border border-white rounded hover:bg-white hover:text-black hover:border-transparent transition duration-300"
                onClick={toggleDropdown}
            >
                {t('language')}
            </button>
            {isOpen && (
                <ul className="absolute mt-2 py-1 bg-white text-black border border-gray-300 rounded-lg">
                    {languages.map((language) => (
                        <li
                            key={language.code}
                            onClick={() => changeLanguage(language.code)}
                            className={`cursor-pointer px-4 py-2 ${language.code === selectedLanguage
                                ? 'bg-gray-200'
                                : ''
                                }`}
                        >
                            {language.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default LanguageSwitcher;
