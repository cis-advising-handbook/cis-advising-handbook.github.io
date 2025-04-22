from bs4 import BeautifulSoup
from datetime import datetime
import requests
import os
import json

import term

CORE_JSON = "core.json"
DATA_DIR = "_data/"

def update_link(template:str, style:list[str], start:str) -> list[str]:
    start = term.str_to_term(start)

    link: str = template.format(**start.format_dict());

    response = requests.get(link, allow_redirects=False)

    if (response.status_code != 200):
        print(link)
        print("FUCK")
        exit()

    now = datetime.now()
    curr_term = term.Term(term.month_to_enum(now.month), now.year)

    new_start = start.clone()

    start.incr()

    while (start <= curr_term):
        link = template.format(**start.format_dict())
        response = requests.get(link, allow_redirects=False)

        if (response.status_code == 200):
            new_start = start.clone()

        start.incr()

    return new_start

def populate_yml(f, courses):
    for course in courses:
        f.write("- subject: \"%s\"\n" % course['subject'])
        f.write("  number: \"%s\"\n" % course['number']);
        f.write("  name: \"%s\"\n" % course['name']);
        if (course['update-style'] == "AUTO"):
            new_start = update_link(course['link-template'], course['update-style'], course['start'])
            course['start'] = "{Semester} {year}".format(**new_start.format_dict())
            f.write("  link: \"%s\"\n" % course['link-template'].format(**new_start.format_dict()))
        elif (course['update-style'] == "MANUAL"):
            print("Don't forget that %s %s is marked for manual update. Check yourself" % (course['subject'], course['number']))
            f.write("  link: \"%s\"\n" % course['link-template'])
        elif(course['update-style'] == "CURR"):
            f.write("  link: \"%s\"\n" % course['link-template'])
        #f.write("\n")


def main():
    now = datetime.now()
    print(f"Current date is: {now}")
    print(f"assuming it is {term.month_to_enum(now.month).name} semester")
    # resp = input("Is this correct? (Y/n) ")
    # 
    # if (resp.lower()[0] != 'y'):
    #     print("exiting...")
    #     exit()

    with open(CORE_JSON, "r") as f:
        contents = json.load(f);

    for category,courses in contents.items():
        with open(os.path.join(DATA_DIR, category + ".yml"), "w") as f:
            populate_yml(f, courses)

    with open(CORE_JSON, "w") as f:
        contents = json.dump(contents, f, indent=2);

if __name__ == "__main__":
    main()
