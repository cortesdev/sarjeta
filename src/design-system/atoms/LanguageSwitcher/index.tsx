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
                className="
                
                 bg-[#d716566e]
                p-3
                width-[60px]
                rouded-[10px] px-4 py-2 bg-transparent text-white border border-white rounded hover:bg-white hover:text-black hover:border-transparent transition duration-300"
                onClick={toggleDropdown}
            >
                {t('language')}
            </button>
            {isOpen && (
                <ul style={{ width: 100, padding: 10, borderRadius: '10px', background: '#d716566e', cursor: 'pointer' }} className="
                bg-[#d716566e]
                p-3
                width-[60px]
                rouded-[10px]
                absolute mt-2 py-1 bg-white text-black border border-gray-300 rounded-lg">
                    {languages.map((language) => (
                        <li
                            key={language.code}
                            style={{ marginBottom: 5 }}
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
