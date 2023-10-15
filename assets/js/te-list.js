/** used for retaining only the unique values in an array */
function unique(value, index, self) {
    return self.indexOf(value) === index;
}

/** used for sorting by 4-digit course number */
function byCourse4d(a, b) {
    return a["course4d"].localeCompare(b["course4d"]);
}

/** return an HTML string for all the courses with the given status */
function makeRows(status, courses) {
    let color = "white"
    switch (status) {
        case "yes":
            color = "green"
            break
        case "ask":
            color = "yellow"
            break;
        case "no":
            color = "red"
            break
        default:
            throw new Error("invalid status: " + status)
    }
    let html = ""
    // status is in the middle column
    html += `<td style="background-color: ${color}">${status.toUpperCase()}</td><td>`
    courses
        .filter((e) => e["status"] === status)
        .sort(byCourse4d).forEach((e) => {
        // course list is in the right column
        if (e["course3d"] === null) {
            // no 3-digit course listed
            html += `${e["course4d"]} ${e["title"]}<br>`
        } else {
            // show 3-digit course in a tooltip
            if (encode_to_3d[e["course4d"]] != undefined) {
                html += `<span class="tooltip">${e["course4d"]}<span class="tooltiptext">formerly ${encode_to_3d[e["course4d"]].trim()}</span></span> ${e["title"]}<br>`
            }
        }
    })
    html += "</td>"
    return html
}
let telist = null;
let fetched_4d_encoding = null;
async function fetchData() {
    try {
        let response1 = await fetch(window.location.origin + "/assets/json/37cu_csci_tech_elective_list.json");
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

    subjects.forEach((s) => {
        const thisSubject = telist.filter((e) => e["course4d"].startsWith(s + " "))

        const statuses = thisSubject.map((e) => e["status"]).filter(unique)

        const caret = document.querySelector('#telist');
        let html = "";
        let addSubject = true
        if (statuses.includes("yes")) {
            html += "<tr>";
            if (addSubject) {
                addSubject = false
                // subject name is in the left column
                html += `<td rowSpan="${statuses.length}">${s}</td>`
            }
            html += makeRows("yes", thisSubject) + "</tr>"
        }
        if (statuses.includes("ask")) {
            html += "<tr>";
            if (addSubject) {
                addSubject = false
                html += `<td rowSpan="${statuses.length}">${s}</td>`
            }
            html += makeRows("ask", thisSubject) + "</tr>"
        }
        if (statuses.includes("no")) {
            html += "<tr>";
            if (addSubject) {
                addSubject = false
                html += `<td rowSpan="${statuses.length}">${s}</td>`
            }
            html += makeRows("no", thisSubject) + "</tr>"
        }
        caret.insertAdjacentHTML("beforeend", html);
    })
}


