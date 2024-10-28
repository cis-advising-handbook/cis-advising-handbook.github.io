/** used for retaining only the unique values in an array */
function unique(value, index, self) {
    return self.indexOf(value) === index;
}

/** used for sorting by 4-digit course number */
function byCourse4d(a, b) {
    return a["course4d"].localeCompare(b["course4d"]);
}

let telist = null;
let fetched_4d_encoding = null;
async function fetchData() {
    try {
        let response1 = await fetch(window.location.origin + "/assets/json/37cu_csci_tech_elective_list_new.json");
        let json1 = await response1.text();
        let telist = JSON.parse(json1);

        let response2 = await fetch(window.location.origin + "/assets/json/3d_to_4d_course_translation.json");
        let json2 = await response2.text();
        let fetched_4d_encoding = JSON.parse(json2);
        processFetchedData(telist, fetched_4d_encoding);
    } catch (error) {
        console.error(error);
    }
}
fetchData();
let encode_to_3d = {};
function processFetchedData(telist, fetched_4d_encoding) {
    for (const key in fetched_4d_encoding) {
        if (fetched_4d_encoding.hasOwnProperty(key)) {
            const new_key = fetched_4d_encoding[key]._4d;
            encode_to_3d[new_key] = key;
        }
    }
    const subjects = telist
        .map((e) => e["course4d"].split(" ")[0].trim())
        .filter(unique)

    subjects.forEach((subject) => {
        const coursesThisSubject = telist.filter((e) => e["course4d"].startsWith(subject + " "))

        const caret = document.querySelector('#telist');
        let html = "";
        let addSubject = true
        let suppressPreStatusUntil = 0
        let suppressCurStatusUntil = 0
        coursesThisSubject.forEach((course,courseIdx) => {
            html += '<tr>'
            if (addSubject) {
                html += `<td class="te_subject" rowspan="${coursesThisSubject.length}">${subject}</td>`
                addSubject = false
            }

            // course code and title
            // show 3-digit course in a tooltip if available, else just show the 4-digit course
            const tooltip = encode_to_3d[course["course4d"]] ?
                  `<span class="tooltip">${course["course4d"]}<span class="tooltiptext">formerly ${encode_to_3d[course["course4d"]].trim()}</span></span>` : course["course4d"];
            html += `<td>${tooltip} ${course["title"]}</td>`;

            // statuses
            preStatus = course["status_prefall24"]
            curStatus = course["status"]
            // check how many subsequent rows have the same preStatus
            if (courseIdx >= suppressPreStatusUntil) {
                const suffixCourses = coursesThisSubject.slice(courseIdx+1)
                let matchedPreStatus = 0
                for (let i = 0; i < suffixCourses.length; i++) {
                    if (suffixCourses[i]['status_prefall24'] != preStatus) {
                        break
                    }
                    matchedPreStatus++
                }
                let rowspan = ""
                if (matchedPreStatus > 0) {
                    rowspan = `rowspan="${matchedPreStatus+1}"`
                    suppressPreStatusUntil = courseIdx + matchedPreStatus + 1
                }
                html += `<td ${rowspan} class="te_status_${preStatus}">${preStatus}</td>`
            }
            // check how many subsequent rows have the same curStatus
            if (courseIdx >= suppressCurStatusUntil) {
                const suffixCourses = coursesThisSubject.slice(courseIdx+1)
                let matchedCurStatus = 0
                for (let i = 0; i < suffixCourses.length; i++) {
                    if (suffixCourses[i]['status'] != curStatus) {
                        break
                    }
                    matchedCurStatus++
                }
                let rowspan = ""
                if (matchedCurStatus > 0) {
                    rowspan = `rowspan="${matchedCurStatus+1}"`
                    suppressCurStatusUntil = courseIdx + matchedCurStatus + 1
                }
                html += `<td ${rowspan} class="te_status_${curStatus}">${curStatus}</td>`
            }
            html += '</tr>'
        })        
        caret.insertAdjacentHTML("beforeend", html);
    })
}


