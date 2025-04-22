import enum
import copy

class Sem(enum.IntEnum):
    SPRING:int = 0
    SUMMER:int = 1
    FALL:int   = 2

class Term():
    def __init__(self, sem, year):
        self.sem = sem
        self.year = year

        # if it is a two digit, expand it to
        # the full year
        if (year < 100):
            self.year += 2000

    def incr(self):
        if (self.sem == Sem.FALL):
            self.year += 1
        self.sem = Sem((self.sem + 1) % 3)

    def format_dict(self):
        res = dict()
        res['yr'] = str(self.year % 100)
        res['year'] = str(self.year)
        res['semester'] = self.sem.name.lower()
        res['SEMSETER'] = self.sem.name.upper()
        res['Semester'] = self.sem.name.title()
        res['sm'] = self.sem.name[0:2].lower()
        res['SM'] = self.sem.name[0:2].upper()
        res['Sm'] = self.sem.name[0:2].title()
        res['s'] = self.sem.name[0:1].lower()
        res['S'] = self.sem.name[0:1].upper()
        return res;

    # idk I like how rust handles it
    def clone(self):
        return copy.deepcopy(self)

    def __str__(self):
        return self.sem.name.title() + " " + str(self.year)

    def __lt__(self, other):
        assert isinstance(other, Term)
        if (self.year == other.year):
            return self.sem < other.sem
        return self.year < other.year

    def __eq__(self, other):
        assert isinstance(other, Term)
        return self.sem == other.sem and self.year == other.year

    def __ne__(self, other):
        return not (self == other)

    def __gt__(self, other):
        return other < self and self != other

    def __le__(self, other):
        return self < other or self == other

    def __ge__(self, other):
        return self > other or self == other

def month_to_enum(month:int):
    SP_START = 1
    SU_START = 5
    FA_START = 8

    if (month < 1 or month > 12):
        raise ValueError("month must be in 0-11 range inclusive")
    if month < SU_START:
        return Sem.SPRING
    if month < FA_START:
        return Sem.SUMMER
    return Sem.FALL

def str_to_term(s:str):
    tokens = s.split()
    sem = tokens[0][0:2].upper()
    if (sem == "FA"):
        sem = Sem.FALL
    elif (sem == "SP"):
        sem = Sem.SPRING
    elif (sem == "SU"):
        sem = Sem.SUMMER
    else:
        raise ValueError("Invalid string for str to term: %s \n Should be \"Term Year\"" % (s))

    return Term(sem, int(tokens[1]))

