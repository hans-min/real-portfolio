import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

import en from "./en.json";
import fr from "./fr.json";

addMessages("en", en);
addMessages("fr", fr);

init({
  fallbackLocale: "en",
  initialLocale: "en",
});
