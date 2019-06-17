import {useState, useEffect} from 'react';

const translate = (dictionary) => {
    return (phrase) => {
        if (!phrase) return '';
        const t = dictionary.find((d) => d.from === phrase);

        if (process.env.NODE_ENV === 'development' && !t) {
            console.log('Translation not found for: ', phrase);
        }

        return t && t.to ? t.to : phrase;
    }
}

const createDictionary = (dictionary) => {
    const t = translate(dictionary);

    const Translator = (props) => {
        const {value} = props;
        const [translation, setTranslation] = useState('');
        const [realValue, setRealValue] = useState('');
    
        useEffect(() => {
            if (value !== realValue) {
                setRealValue(value);
                setTranslation(t(value));
            }
        }, [value, realValue])
    
        return translation;
    }

    return Translator;
}

export default createDictionary;