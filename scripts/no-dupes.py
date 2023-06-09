import json, sys

telist = json.load(open(sys.argv[1]))

_4d = set()
for t in telist:
    d4 = t['course4d']
    assert d4 not in _4d, "duplicate entries for: " + d4
    _4d.add( d4 )
    pass
