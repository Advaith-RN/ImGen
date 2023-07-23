import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

    if(prompt === surpriseMePrompts[randomIndex]){
        return getRandomPrompt(prompt);
    }
    return surpriseMePrompts[randomIndex];
}

export async function downloadImage(_id, photoUrl) {
    FileSaver.saveAs(photoUrl, `download-${_id}.jpg`);
    console.log("downlowd");
}