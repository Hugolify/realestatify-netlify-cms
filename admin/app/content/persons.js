import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { places } from '../fields/persons-places.js'
import { featured_image } from '../fields/featured-image.js'
import { contact } from '../fields/contact.js'
import { body } from '../fields/body.js'
import {t} from "../i18n/translater.js";

const persons = {
    name: 'persons',
    folder: 'content/persons',
    label: t.content.persons.label,
    label_singular: t.content.persons.label_singular,
    description: t.content.persons.description,
    
    create: true,
    editor: { preview: false },
    i18n: true,

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    slug: '{{slug}}',
    
    sortable_fields: ['title'],
    summary: '{{title}}',

    fields: [
        isNotIndex,
        draft,
        title,
        places,
        description,
        featured_image,
        contact,
        body
    ]
}

export default persons