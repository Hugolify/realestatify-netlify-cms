import { overrideTranslations } from '../overrider.js';
import { blocks } from './blocks.js';
import { config } from './config.js';
import { content } from './content.js';
import { fields } from './fields.js';
import { shortcodes } from './shortcodes.js';

export const realestatify = overrideTranslations(
    {
        blocks,
        config,
        content,
        fields,
        shortcodes
    },
    {
        blocks: {
            selectedplaces: "Sélection d’agences"
        },
        content: {
            places: {
                label: "Agences",
                label_singular: "Agence",
                description: "Toutes les agences"
            }
        },
        fields: {
            places_items: "Agences",
            place: "Agence",
            persons_places: "Rattaché à une ou plusieurs agences ?"
        }
    }
);