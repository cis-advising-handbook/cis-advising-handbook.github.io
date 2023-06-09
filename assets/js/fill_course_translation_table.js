let map_3to4 = undefined

fetch(window.location.origin + "/3d_to_4d_course_translation.json")
    .then(response => response.text())
    .then(json => {
        map_3to4 = JSON.parse(json);
    });


const textarea = document.querySelector('#xlatInput');
textarea.addEventListener('input', function() {
    //console.log('textarea says ' + textarea.value)
    const origText = textarea.value;
    let resultText = origText;
    
    const _3dCourse = /(?<subject>[a-zA-Z]{2,4})\s*(?<number>\d{3})(?<after>[^\d])/g;
    const matches = origText.matchAll(_3dCourse);

    for (const match of matches) {
        const d3 = match.groups['subject'].toUpperCase() + ' ' + match.groups['number'];
        const after = match.groups['after'];
        if (map_3to4.hasOwnProperty(d3)) {
            resultText = resultText.replaceAll(match[0], map_3to4[d3]['_4d'] + after);
        }
    }
    const output = document.querySelector('#xlatOutput');
    output.innerHTML = resultText;
    
}, false);

function fillTable() {
    const clickToFIll = document.querySelector('#clickToFill');
    if (clickToFill == null) {
        return;
    }
    clickToFill.remove();
    
    const caret = document.querySelector('#table_3to4');
    const sorted3dCourses = Object.entries(map_3to4).sort((a, b) => a[0].localeCompare(b[0]))
    for (const [_3dname,info] of sorted3dCourses) {
        let html = "";
        if (info.hasOwnProperty("title_3d")) {
            html = `<tr><td> ${_3dname} ${info['title_3d']} </td> <td> ${info['_4d']} ${info['title']} </td></tr>\n`
        } else {
            html = `<tr><td> ${_3dname} ${info['title']} </td> <td style="white-space:nowrap"> ${info['_4d']} </td></tr>\n`
        }
        caret.insertAdjacentHTML("beforeend", html);
    }
}
