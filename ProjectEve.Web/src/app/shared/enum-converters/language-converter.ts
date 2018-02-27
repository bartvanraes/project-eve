import { Language } from "../enums/language";

export class LanguageConverter {
    public static convert(language: Language) : string {
        switch (language) {
            case Language.English:
                return "English";
            case Language.Dutch:
                return "Dutch";
        }
    }
}