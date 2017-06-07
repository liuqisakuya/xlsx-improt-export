import languages from './languages.json';
// var languages =  require('./languages.json');
const locales = Object.keys(languages);

// 定义枚举项原型
class EnumItemType {
    getText(lang) {
        return locales.indexOf(lang) > -1 ? this[lang] : this[locales[0]];
    }
}

export const EnumItem = new EnumItemType();

// 定义枚举原型
class EnumType {
    has(key) {
        return key && this.properties && this.properties[key] !== undefined;
    }

    map(callback, lang) {
        return this.toList(lang).map(callback);
    }

    toList(lang) {
        const list = [];
        if(this.properties)
            Object.getOwnPropertyNames(this).forEach(key => {
                if(key !== 'properties')
                    list.push({
                        text: this.properties[this[key]].getText(lang),
                        value: this[key]
                    });
            });
        return list;
    }
}

export const Enum = new EnumType();
