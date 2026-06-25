const fs = require('fs');

const data = JSON.parse(fs.readFileSync('Novo Modelo de Landing Page-14jan.json', 'utf8'));

let extracted = [];

function traverse(element) {
    if (element.elType === 'widget') {
        let type = element.widgetType;
        let content = '';
        let settings = element.settings || {};
        
        if (type === 'heading') {
            content = settings.title || '';
        } else if (type === 'text-editor') {
            content = settings.editor || '';
        } else if (type === 'image') {
            content = settings.image ? settings.image.url : '';
        } else if (type === 'button') {
            content = settings.text || '';
        } else if (type === 'video') {
            content = settings.youtube_url || settings.vimeo_url || '';
        } else if (type === 'icon-list') {
            content = settings.icon_list ? settings.icon_list.map(i => i.text).join(' | ') : '';
        } else {
            content = JSON.stringify(settings);
        }
        
        extracted.push({
            type: type,
            content: content
        });
    }

    if (element.elements && element.elements.length > 0) {
        element.elements.forEach(traverse);
    }
}

if (data.content) {
    data.content.forEach(traverse);
} else if (Array.isArray(data)) {
    data.forEach(traverse);
}

fs.writeFileSync('extracted_content.json', JSON.stringify(extracted, null, 2));
console.log('Done parsing.');
