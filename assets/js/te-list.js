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
            html += `<span class="tooltip">${e["course4d"]}<span class="tooltiptext">formerly ${e["course3d"]}</span></span> ${e["title"]}<br>`
        }
    })
    html += "</td>"
    return html
}

fetch(window.location.origin + "/37cu_csci_tech_elective_list.json")
    .then(response => response.text())
    .then(json => {

        let telist = JSON.parse(json);

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
    });


